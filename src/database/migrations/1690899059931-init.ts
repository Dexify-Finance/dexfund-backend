import { MigrationInterface, QueryRunner } from "typeorm";

export class init1690899059931 implements MigrationInterface {
    name = 'init1690899059931'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "currency_price" ("id" SERIAL NOT NULL, "timestamp" character varying NOT NULL, "price" character varying NOT NULL, "currencyAddress" character varying(66), CONSTRAINT "PK_1b0186eb043540ba4636d4c4dc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "currency" ("address" character varying(66) NOT NULL, "chainId" integer NOT NULL DEFAULT '1000', "name" character varying NOT NULL, "symbol" character varying NOT NULL, "decimals" integer NOT NULL, "logoURI" character varying, "version" integer, "verified" boolean, "vendor" character varying DEFAULT 'venom', CONSTRAINT "PK_e5d8fb965b9370a60ddcc1c7326" PRIMARY KEY ("address"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying(66) NOT NULL, "email" character varying, "title" character varying(100), "bio" character varying(5000), "name" character varying(100), "image" character varying, "twitterName" character varying, "twitterScreenName" character varying, "twitterImage" character varying, CONSTRAINT "UQ_3122b4b8709577da50e89b68983" UNIQUE ("address"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fund" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying(66) NOT NULL, "name" character varying, "symbol" character varying, "comptroller" character varying(66) NOT NULL, "owner" character varying(66) NOT NULL, "category" integer NOT NULL DEFAULT '2', "image" character varying, "description" character varying, CONSTRAINT "UQ_51f0ac84dd7cd0b78794920495c" UNIQUE ("address"), CONSTRAINT "PK_b3ac6e413e6e449bb499db1ccbc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "currency_price" ADD CONSTRAINT "FK_fa557d29f3c56dd90a64ed90152" FOREIGN KEY ("currencyAddress") REFERENCES "currency"("address") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "currency_price" DROP CONSTRAINT "FK_fa557d29f3c56dd90a64ed90152"`);
        await queryRunner.query(`DROP TABLE "fund"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "currency"`);
        await queryRunner.query(`DROP TABLE "currency_price"`);
    }

}
