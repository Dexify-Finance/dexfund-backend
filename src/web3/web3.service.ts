import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Address, ProviderRpcClient, Transaction } from 'everscale-inpage-provider';
import { EverscaleStandaloneClient } from 'everscale-standalone-client/nodejs';
import { async } from 'rxjs';
import FundDeployerABI from 'src/abi/FundDeployer';
import vaultABI from 'src/abi/Vault';
import { FundDeployerAddress } from 'src/abi/addresses';
import { FundDto } from 'src/fund/dto/fund.dto';
import { FundCategoryType } from 'src/fund/entity/fund.entity';
import { FundService } from 'src/fund/fund.service';

enum FundAction {
  BUY,
  REDEEM
}

@Injectable()
export class Web3Service {
  private venomClient: ProviderRpcClient;
  private readonly logger = new Logger(Web3Service.name);

  constructor(
    private readonly fundService: FundService,
  ) {
    this.venomClient = new ProviderRpcClient({
      fallback: () =>
        EverscaleStandaloneClient.create({
          connection: {
            // Connection configurations go here
            id: 1000,
            group: 'venom_testnet',
            type: 'jrpc',
            data: {
              endpoint: 'https://jrpc-testnet.venom.foundation/rpc',
            },
          },
        }),
      forceUseFallback: true,
    });

    this.subscribeFundDeployerEvents();
    this.setupSubscribeForVaults();
    // this.subscribeVaultEvents(new Address('0:9bce491e5c64023b3ccec7c57cdba975b6abbcb67fccf0e6adf731c9592df89e'));
    // this.updateFundPortfolio(new Address("0:9bce491e5c64023b3ccec7c57cdba975b6abbcb67fccf0e6adf731c9592df89e"))
  }

  private subscribeFundDeployerEvents() {
    // Create a contract instance
    const fundDeployerContract = new this.venomClient.Contract(
      FundDeployerABI,
      new Address(FundDeployerAddress),
    );

    const subscriber = new this.venomClient.Subscriber();

    const contractEvents = fundDeployerContract.events(subscriber);

    contractEvents.on(event => {
      switch (event.event) {
        case 'vaultDeployed':
          this.handleNewVaultDeployed(event.data);
      }
    });
  }

  private async handleNewVaultDeployed(data: any) {
    const vaultAddress: Address = data.vault;
    const ownerAddress: Address = data.owner;
    const comptroller: Address = data.comptroller;
    const name = data.name;
    const symbol = data.symbol;

    const vaultContract = new this.venomClient.Contract(
      vaultABI,
      vaultAddress,
    );

    const tokenRootData = (await vaultContract.methods.lp_token_root({} as never).call()) as any;

    console.log('token root data: ', tokenRootData, tokenRootData.lp_token_root);
    const fund = await this.fundService.createNewFund({
      address: vaultAddress.toString(),
      category: FundCategoryType.INDEX,
      owner: ownerAddress.toString(),
      comptroller: comptroller.toString(),
      token_root: tokenRootData.lp_token_root.toString(),
      name,
      symbol
    })

    console.log('new vault created: ', fund)


    this.subscribeVaultEvents(vaultAddress);
  }

  private subscribeVaultEvents(vaultAddress: Address) {
    const subscriber = new this.venomClient.Subscriber();
    // Create a contract instance
    const vaultContract = new this.venomClient.Contract(
      vaultABI,
      vaultAddress,
    );
    const contractEvents = vaultContract.events(subscriber);

    contractEvents.on(event => {
      console.log('contractEvent-vault', event);
      switch (event.event) {
        case 'LPTokensMinted':
          this.handleShareBoughtEvent(vaultAddress, event.data, event.transaction);
          break;
        case 'LPTokensRedeemed':
          this.handleShareRedeemedEvent(vaultAddress, event.data, event.transaction);
          break;
        case 'LPTokenRootDeployed':
          this.handleLPTokenRootDeployed(vaultAddress, event.data);
          break;
      }
    })
  }

  private async handleShareBoughtEvent(vaultAddress: Address, data: any, transaction: Transaction) {
    // event LPTokensMinted(uint128 lpAmount, address sender, address tokenRoot, uint128 depositAmount);
    await this.updateFundPortfolio(vaultAddress);
    
    const investorAddress: Address = data.sender;
    const lpAmount = data.lpAmount;
    const tokenRoot = data.tokenRoot;
    const depositAmount = data.depositAmount;
    const hash = transaction.id.hash;
    const createdAt = transaction.createdAt;

    await this.fundService.updateFundInvestor(vaultAddress, investorAddress, lpAmount, true);
    await this.fundService.addFundAction(vaultAddress, investorAddress, tokenRoot, depositAmount, 'BUY SHARES', hash, createdAt);
  }

  private async handleShareRedeemedEvent(vaultAddress: Address, data: any, transaction: Transaction) {
    // event LPTokensRedeemed(uint128 lpAmount, uint128 tokenAmount, uint128 share, uint128 totalSupply);
    await this.updateFundPortfolio(vaultAddress);

    const investorAddress: Address = data.sender;
    const lpAmount = data.lpAmount;
    const tokenRoot = null;
    const depositAmount = data.lpAmount;
    const hash = transaction.id.hash;
    const createdAt = transaction.createdAt;

    await this.fundService.updateFundInvestor(vaultAddress, investorAddress, lpAmount, false);
    await this.fundService.addFundAction(vaultAddress, investorAddress, tokenRoot, depositAmount, 'REDEEM SHARES', hash, createdAt);
  }

  private async handleLPTokenRootDeployed(vaultAddress: Address, data: any) {
    const tokenRoot = data.tokenRoot;
    await this.fundService.updateFundData(vaultAddress, 'token_root', tokenRoot.toString());
  }

  private async updateFundPortfolio(vaultAddress: Address) {
    const vault = await this.fundService.getFund(vaultAddress.toString());

    if (!vault) {
      return;
    } 

    const vaultContract = new this.venomClient.Contract(
      vaultABI,
      vaultAddress
    );

    const tokenBalances = (await vaultContract.methods._RootAddressToBalance({} as never).call()) as any;

    const balances = tokenBalances?._RootAddressToBalance || [];

    await Promise.all(balances.map(async data => {
      const address = data[0];
      const balance = data[1];
      console.log('address-balance: ', address, balance);
      if (address.toString().toLowerCase() != vault.token_root.toLowerCase()) {
        try {
          await this.fundService.updateFundPortfolio(vaultAddress.toString(), address.toString(), balance);
        } catch (e) {
          this.logger.error(`Error in saving fund portfolio`);
        }
      }
    }));

    // this.fundService.updateFundPortfolio(vaultAddress, currency, amount)
  }

  private async setupSubscribeForVaults() {
    const funds = await (this.fundService.getFundRepository()).find();
    funds.map(fund => {
      this.subscribeVaultEvents(new Address(fund.address));
    })
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async updateFundHolding() {
    const funds = await this.fundService.getTopFunds();
    funds.map(fund => {
      try {
        this.updateFundPortfolio(new Address(fund.address))
      } catch (err) {
        console.log("Error in updating fund: ", err);
        this.logger.error(`Error in updating fund: ${err}`)
      }
    })
  }
}
