import { MigrationInterface, QueryRunner } from 'typeorm';

export class addedAddressField1669825474275 implements MigrationInterface {
  name = 'addedAddressField1669825474275';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "currency" ADD "address" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "currency" DROP COLUMN "address"`);
  }
}
