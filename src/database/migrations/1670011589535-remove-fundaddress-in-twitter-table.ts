import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeFundaddressInTwitterTable1670011589535
  implements MigrationInterface
{
  name = 'removeFundaddressInTwitterTable1670011589535';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "twitter" DROP CONSTRAINT "UQ_51c12abc7ae3d54cc97fb29d1de"`,
    );
    await queryRunner.query(`ALTER TABLE "twitter" DROP COLUMN "fundAddress"`);
    await queryRunner.query(
      `ALTER TABLE "twitter" ADD CONSTRAINT "UQ_e9e0ae6bc4a43eb89b839272633" UNIQUE ("address")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "twitter" DROP CONSTRAINT "UQ_e9e0ae6bc4a43eb89b839272633"`,
    );
    await queryRunner.query(
      `ALTER TABLE "twitter" ADD "fundAddress" character varying(42) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "twitter" ADD CONSTRAINT "UQ_51c12abc7ae3d54cc97fb29d1de" UNIQUE ("fundAddress")`,
    );
  }
}
