/*
  Warnings:

  - You are about to drop the `PostList` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PostList";
PRAGMA foreign_keys=on;

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
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_user" ("cpf", "email", "endereco", "id", "idade", "login", "password", "rg") SELECT "cpf", "email", "endereco", "id", "idade", "login", "password", "rg" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
