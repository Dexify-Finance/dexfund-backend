import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTablesForCurriencyPrice1669408126369
  implements MigrationInterface
{
  name = 'createTablesForCurriencyPrice1669408126369';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "currency" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "symbol" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "price" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "price" character varying, "timeId" integer NOT NULL, "currencyId" uuid, CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "price" ADD CONSTRAINT "FK_7092a09a757829c83005c20697c" FOREIGN KEY ("currencyId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "price" DROP CONSTRAINT "FK_7092a09a757829c83005c20697c"`,
    );
    await queryRunner.query(`DROP TABLE "price"`);
    await queryRunner.query(`DROP TABLE "currency"`);
  }
}
