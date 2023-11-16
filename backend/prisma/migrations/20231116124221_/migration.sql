/*
  Warnings:

  - Added the required column `idHospital` to the `hospital` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_hospital" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "idHospital" TEXT NOT NULL
);
INSERT INTO "new_hospital" ("cnpj", "email", "endereco", "id", "nome", "senha", "telefone") SELECT "cnpj", "email", "endereco", "id", "nome", "senha", "telefone" FROM "hospital";
DROP TABLE "hospital";
ALTER TABLE "new_hospital" RENAME TO "hospital";
CREATE UNIQUE INDEX "hospital_cnpj_key" ON "hospital"("cnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
