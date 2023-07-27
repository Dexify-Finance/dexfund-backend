import { MigrationInterface, QueryRunner } from "typeorm";

export class updateFieldInFund1690486787951 implements MigrationInterface {
    name = 'updateFieldInFund1690486787951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fund" DROP CONSTRAINT "UQ_51f0ac84dd7cd0b78794920495c"`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "address" character varying(66) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fund" ADD CONSTRAINT "UQ_51f0ac84dd7cd0b78794920495c" UNIQUE ("address")`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "comptroller"`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "comptroller" character varying(66) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "owner"`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "owner" character varying(66) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_3122b4b8709577da50e89b68983"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying(66) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_3122b4b8709577da50e89b68983" UNIQUE ("address")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_3122b4b8709577da50e89b68983"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying(42) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_3122b4b8709577da50e89b68983" UNIQUE ("address")`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "owner"`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "owner" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "comptroller"`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "comptroller" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fund" DROP CONSTRAINT "UQ_51f0ac84dd7cd0b78794920495c"`);
        await queryRunner.query(`ALTER TABLE "fund" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "fund" ADD "address" character varying(42) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "fund" ADD CONSTRAINT "UQ_51f0ac84dd7cd0b78794920495c" UNIQUE ("address")`);
    }

}
