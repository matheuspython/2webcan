/*
  Warnings:

  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_user" ("cpf", "endereco", "id", "login", "password") SELECT "cpf", "endereco", "id", "login", "password" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
