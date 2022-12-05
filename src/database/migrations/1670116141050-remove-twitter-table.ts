import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeTwitterTable1670116141050 implements MigrationInterface {
  name = 'removeTwitterTable1670116141050';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "twitterName" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "twitterScreenName" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "twitterImage" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "twitterImage"`);
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "twitterScreenName"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "twitterName"`);
  }
}
