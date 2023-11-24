-- CreateTable
CREATE TABLE "Diagnostico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Diagnostico_login_key" ON "Diagnostico"("login");
