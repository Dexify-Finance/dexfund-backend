import { Currency } from './../../price-logging/entities/currency.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeCurrencies1669490713401 implements MigrationInterface {
  name = 'InitializeCurrencies1669490713401';

  initialCurrencies = [
    {
      symbol: 'dpi',
      name: 'defipulse-index',
    },
    {
      symbol: 'usdc',
      name: 'usd-coin',
    },
    {
      symbol: 'zrx',
      name: '0x',
    },
    {
      symbol: 'busd',
      name: 'binance-usd',
    },
    {
      symbol: 'sxp',
      name: 'swipe',
    },
    {
      symbol: 'sushi',
      name: 'sushi',
    },
    {
      symbol: 'uni',
      name: 'uniswap',
    },
    {
      symbol: 'bnb',
      name: 'binancecoin',
    },
    {
      symbol: 'eth',
      name: 'ethereum',
    },
    {
      symbol: 'comp',
      name: 'compound-governance-token',
    },
    {
      symbol: 'link',
      name: 'chainlink',
    },
    {
      symbol: 'band',
      name: 'band-protocol',
    },
    {
      symbol: 'usdt',
      name: 'tether',
    },
    {
      symbol: 'alpha',
      name: 'alpha-finance',
    },
    {
      symbol: 'dai',
      name: 'dai',
    },
    {
      symbol: 'yfi',
      name: 'yearn-finance',
    },
    {
      symbol: 'bzrx',
      name: 'bzx-protocol',
    },
    {
      symbol: 'btcb',
      name: 'binance-bitcoin',
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.initialCurrencies.map((currency) => {
        queryRunner.manager.save(Currency, {
          symbol: currency.symbol,
          name: currency.name,
        });
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.initialCurrencies.map((currency) => {
        queryRunner.manager.delete(Currency, {
          symbol: currency.symbol,
          name: currency.name,
        });
      }),
    );
  }
}
