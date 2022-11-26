import { MigrationInterface, QueryRunner } from 'typeorm';

export class addedTimestampPriceTable1669477771695
  implements MigrationInterface
{
  name = 'addedTimestampPriceTable1669477771695';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "price" ADD "timeStamp" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "timeStamp"`);
  }
}
