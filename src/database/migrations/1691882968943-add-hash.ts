import { MigrationInterface, QueryRunner } from "typeorm";

export class addHash1691882968943 implements MigrationInterface {
    name = 'addHash1691882968943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fund_action" ADD "hash" character varying DEFAULT '0:'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fund_action" DROP COLUMN "hash"`);
    }

}
