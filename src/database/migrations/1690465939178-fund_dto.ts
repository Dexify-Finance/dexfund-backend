import { MigrationInterface, QueryRunner } from "typeorm";

export class fundDto1690465939178 implements MigrationInterface {
    name = 'fundDto1690465939178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fund" ADD "name" character varying`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "symbol" character varying`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "comptroller" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "owner" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "owner"`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "comptroller"`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "symbol"`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "name"`);
    }

}
