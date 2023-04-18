import { MigrationInterface, QueryRunner } from "typeorm";

export class createFundTable1681760356446 implements MigrationInterface {
    name = 'createFundTable1681760356446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fund" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying(42) NOT NULL, "category" integer NOT NULL DEFAULT '2', "image" character varying, CONSTRAINT "UQ_51f0ac84dd7cd0b78794920495c" UNIQUE ("address"), CONSTRAINT "PK_b3ac6e413e6e449bb499db1ccbc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fund"`);
    }

}
