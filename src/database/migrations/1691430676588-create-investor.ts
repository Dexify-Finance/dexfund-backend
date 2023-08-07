import { MigrationInterface, QueryRunner } from "typeorm";

export class createInvestor1691430676588 implements MigrationInterface {
    name = 'createInvestor1691430676588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "fund_investor" ("id" SERIAL NOT NULL, "fund" character varying NOT NULL, "investor" character varying NOT NULL, "amount" character varying DEFAULT '0', "timestamp" character varying NOT NULL, CONSTRAINT "PK_9e7f08fba02d5fd9ba91fd86f07" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "fund_investor"`);
    }

}
