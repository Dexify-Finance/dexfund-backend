import { MigrationInterface, QueryRunner } from 'typeorm';

export class changedTimestampToBigint1669490413401
  implements MigrationInterface
{
  name = 'changedTimestampToBigint1669490413401';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "timeId"`);
    await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "timeStamp"`);
    await queryRunner.query(
      `ALTER TABLE "price" ADD "timeStamp" bigint NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "price" DROP COLUMN "timeStamp"`);
    await queryRunner.query(
      `ALTER TABLE "price" ADD "timeStamp" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "price" ADD "timeId" integer NOT NULL`,
    );
  }
}
