import { MigrationInterface, QueryRunner } from "typeorm";

export class createActionTable1691444823659 implements MigrationInterface {
    name = 'createActionTable1691444823659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fund_action" ("id" SERIAL NOT NULL, "fund" character varying NOT NULL, "investor" character varying NOT NULL, "action_type" character varying NOT NULL, "currency" character varying, "amount" character varying DEFAULT '0', "timestamp" character varying NOT NULL, CONSTRAINT "PK_6b16feee99f7e7408d314306dbb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fund_action"`);
    }

}
