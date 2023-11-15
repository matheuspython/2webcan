-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "melhoresTecnologias" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "github" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PostList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tecnologias" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imgHost" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "InicioProjeto" DATETIME NOT NULL,
    "FimProjeto" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");
