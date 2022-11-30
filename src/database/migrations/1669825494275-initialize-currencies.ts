import { Currency } from './../../price-logging/entities/currency.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeCurrencies1669825494275 implements MigrationInterface {
  name = 'InitializeCurrencies1669825494275';

  initialCurrencies = [
    {
      symbol: 'dpi',
      name: 'defipulse-index',
      address: '0x564d4a58fd000aa7b3e80f8a1f2a8e67f759151d',
    },
    {
      symbol: 'usdc',
      name: 'usd-coin',
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    },
    {
      symbol: 'zrx',
      name: '0x',
      address: '0x0ddc5e539af1753693e9463ca619406b1b06d66e',
    },
    {
      symbol: 'busd',
      name: 'binance-usd',
      address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    {
      symbol: 'sxp',
      name: 'swipe',
      address: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
    },
    {
      symbol: 'sushi',
      name: 'sushi',
      address: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
    },
    {
      symbol: 'uni',
      name: 'uniswap',
      address: '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1',
    },
    {
      symbol: 'wbnb',
      name: 'wbnb',
      address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c ',
    },
    {
      symbol: 'comp',
      name: 'compound-governance-token',
      address: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    },
    {
      symbol: 'link',
      name: 'chainlink',
      address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    {
      symbol: 'band',
      name: 'band-protocol',
      address: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
    },
    {
      symbol: 'usdt',
      name: 'tether',
      address: '0x55d398326f99059ff775485246999027b3197955',
    },
    {
      symbol: 'alpha',
      name: 'alpha-finance',
      address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    },
    {
      symbol: 'dai',
      name: 'dai',
      address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    {
      symbol: 'yfi',
      name: 'yearn-finance',
      address: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    },
    {
      symbol: 'bzrx',
      name: 'bzx-protocol',
      address: '0x4b87642aedf10b642be4663db842ecc5a88bf5ba',
    },
    {
      symbol: 'btcb',
      name: 'binance-bitcoin',
      address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await Promise.all(
      this.initialCurrencies.map((currency) => {
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
      this.initialCurrencies.map((currency) => {
        queryRunner.manager.delete(Currency, {
          symbol: currency.symbol,
          name: currency.name,
        });
      }),
    );
  }
}
