import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Currency } from './entity/currency.entity';
import { Repository } from 'typeorm';
import { CurrencyPrice } from './entity/currency_price.entity';
import { Cron, CronExpression } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CurrencyService {
  private readonly logger = new Logger(CurrencyService.name);

  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
    @InjectRepository(CurrencyPrice)
    private currencyPriceRepository: Repository<CurrencyPrice>,
    private readonly httpService: HttpService,
  ) { 
    this.updateCurrencies();
  }

  @Cron(CronExpression.EVERY_HOUR)
  async updateCurrencies() {
    // Update currency table
    const { data: assetData } = await firstValueFrom(this.httpService.get(`https://testnet.web3.world/assets/manifest.json`));
    await Promise.all(assetData.tokens.map(async token => {
      const asset = await this.currencyRepository.findOne({
        where: {
          address: token.address
        }
      });

      if (asset) {
        await this.currencyRepository.update({address: asset.address}, token);
      } else {
        await this.currencyRepository.save(token);
      }
    }));

    // Update currency prices table
    let take = 10, offset = 0;
    let result = await this.fetchPrices(take, offset);
    const time = new Date();
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);
    const timestamp = time.getTime();

    while(result && result.length > 0) {
      const currencies = await Promise.all(result?.map(async currencyData => {
        const currency = await this.currencyRepository.findOneBy({address: currencyData.address})
        console.log("currency: ", currency)
        return {
          currency: currency,
          price: currencyData.price,
          timestamp
        }
      }));
      await this.currencyPriceRepository.save(currencies);

      offset += result.length;
      result = await this.fetchPrices(take, offset);
    }
  }

  private async fetchPrices(take: number, offset: number) {
    const { data } = await firstValueFrom(this.httpService.post(`https://testnetapi.web3.world/v1/currencies`, {
      limit: take,
      offset,
      whiteListUri: "https://testnet.web3.world/assets/manifest.json"
    }));

    return data?.currencies || [];
  }

}
