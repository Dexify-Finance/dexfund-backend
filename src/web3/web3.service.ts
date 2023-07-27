import { Injectable } from '@nestjs/common';
import { Address, ProviderRpcClient } from 'everscale-inpage-provider';
import { EverscaleStandaloneClient } from 'everscale-standalone-client/nodejs';
import FundDeployerABI from 'src/abi/FundDeployer';
import { FundDeployerAddress } from 'src/abi/addresses';
import { FundDto } from 'src/fund/dto/fund.dto';
import { FundCategoryType } from 'src/fund/entity/fund.entity';
import { FundService } from 'src/fund/fund.service';

@Injectable()
export class Web3Service {
    private venomClient;
    constructor(
      private readonly fundService: FundService
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

        // Create a contract instance
        const fundDeployerContract = new this.venomClient.Contract(
            FundDeployerABI,
            FundDeployerAddress,
        );

        const subscriber = new this.venomClient.Subscriber();

        const contractEvents = fundDeployerContract.events(subscriber);

        contractEvents.on(event => {
          console.log('contractEvent', event);
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
      
      const fund = await this.fundService.createNewFund({
        address: vaultAddress.toString(),
        category: FundCategoryType.ICON,
        owner: ownerAddress.toString(),
        comptroller: comptroller.toString(),
        name,
        symbol
      })
      
      console.log('new vault created: ', fund)

    }
}
