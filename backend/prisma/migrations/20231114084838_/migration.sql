/*
  Warnings:

  - You are about to drop the column `description` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `melhoresTecnologias` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `user` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);
INSERT INTO "new_user" ("id", "login", "password") SELECT "id", "login", "password" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
