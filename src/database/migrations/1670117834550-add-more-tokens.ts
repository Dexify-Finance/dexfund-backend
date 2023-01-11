import { MigrationInterface, QueryRunner } from 'typeorm';
import { Currency } from '../../price-logging/entities/currency.entity';

export class addMoreTokens1670118334550 implements MigrationInterface {
  name = 'addMoreTokens1670118334550';

  addedCurrencies = [
    {
      symbol: 'aave',
      name: 'aave',
      address: '0xfb6115445Bff7b52FeB98650C87f44907E58f802',
    },
    {
      symbol: 'twt',
      name: 'trust-wallet-token',
      address: '0x4B0F1812e5Df2A09796481Ff14017e6005508003',
    },
    {
      symbol: 'eth',
      name: 'ethereum',
      address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(Currency, {
      name: 'eth',
    });
    await Promise.all(
      this.addedCurrencies.map((currency) => {
        queryRunner.manager.save(Currency, {
          symbol: currency.symbol,
          name: currency.name,
          address: currency.address,
        });
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.addedCurrencies.map((currency) => {
        queryRunner.manager.delete(Currency, {
          symbol: currency.symbol,
          name: currency.name,
        });
      }),
    );
  }
}
