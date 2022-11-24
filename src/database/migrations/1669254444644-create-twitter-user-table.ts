import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTwitterUserTable1669254444644 implements MigrationInterface {
  name = 'createTwitterUserTable1669254444644';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "twitter" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying(42) NOT NULL, "fundAddress" character varying(42) NOT NULL, "twitterName" character varying NOT NULL, "twitterScreenName" character varying, "twitterImage" character varying, CONSTRAINT "UQ_51c12abc7ae3d54cc97fb29d1de" UNIQUE ("fundAddress"), CONSTRAINT "PK_c89290ccd7c865bbd1a833383a3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "twitter"`);
  }
}
