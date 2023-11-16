/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `hospital` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "hospital_login_key" ON "hospital"("login");
