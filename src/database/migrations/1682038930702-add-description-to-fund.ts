import { MigrationInterface, QueryRunner } from "typeorm";

export class addDescriptionToFund1682038930702 implements MigrationInterface {
    name = 'addDescriptionToFund1682038930702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fund" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "description"`);
    }

}
