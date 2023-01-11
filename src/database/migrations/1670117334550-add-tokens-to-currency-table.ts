import { MigrationInterface, QueryRunner } from 'typeorm';
import { Currency } from './../../price-logging/entities/currency.entity';

export class addTokensToCurrencyTable1670117334550
  implements MigrationInterface
{
  name = 'addTokensToCurrencyTable1670117334550';

  addedCurrencies = [
    {
      symbol: 'eth',
      name: 'eth',
      address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    {
      symbol: 'xrp',
      name: 'binance-peg-xrp',
      address: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
    },
    {
      symbol: 'doge',
      name: 'dogecoin',
      address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
    },
    {
      symbol: 'ada',
      name: 'cardano',
      address: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
    },
    {
      symbol: 'matic',
      name: 'matic-network',
      address: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD',
    },
    {
      symbol: 'ltc',
      name: 'litecoin',
      address: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
    },
    {
      symbol: 'dot',
      name: 'binance-peg-polkadot',
      address: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    {
      symbol: 'sol',
      name: 'solana',
      address: '0xFEa6aB80cd850c3e63374Bc737479aeEC0E8b9a1',
    },
    {
      symbol: 'avax',
      name: 'avalanche-2',
      address: '0x1CE0c2827e2eF14D5C4f29a091d735A204794041',
    },
    {
      symbol: 'xtz',
      name: 'tezos',
      address: '0xfb6115445Bff7b52FeB98650C87f44907E58f802',
    },
    {
      symbol: 'ftm',
      name: 'fantom',
      address: '0xAD29AbB318791D579433D831ed122aFeAf29dcfe',
    },
    {
      symbol: 'cake',
      name: 'pancakeswap-token',
      address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    {
      symbol: 'paxg',
      name: 'pax-gold',
      address: '0x7950865a9140cB519342433146Ed5b40c6F210f7',
    },
    {
      symbol: '1inch',
      name: '1inch',
      address: '0x111111111117dC0aa78b770fA6A738034120C302',
    },
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
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
