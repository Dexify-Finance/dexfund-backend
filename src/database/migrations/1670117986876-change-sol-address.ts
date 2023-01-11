import { MigrationInterface, QueryRunner } from 'typeorm';
import { Currency } from '../../price-logging/entities/currency.entity';

export class changeSolAddress1670117986876 implements MigrationInterface {
  name = 'changeSolAddress1670117986876';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.update(
      Currency,
      { name: 'solana' },
      { address: '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF' },
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.update(
      Currency,
      { name: 'solana' },
      { address: '0xFEa6aB80cd850c3e63374Bc737479aeEC0E8b9a1' },
    );
  }
}
