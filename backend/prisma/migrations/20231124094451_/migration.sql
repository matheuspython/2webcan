/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "dataNascimento" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "temperatura" TEXT NOT NULL,
    "pressao" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "condicaoMedica" TEXT NOT NULL,
    "alergia" TEXT NOT NULL,
    "medicamentos" TEXT NOT NULL,
    "febre" TEXT NOT NULL,
    "tosse" TEXT NOT NULL,
    "garganta" TEXT NOT NULL,
    "perdaOlfato" TEXT NOT NULL,
    "contatoCovid" TEXT NOT NULL,
    "viagem" TEXT NOT NULL,
    "areasTransmissao" TEXT NOT NULL,
    "outrasInformacoes" TEXT NOT NULL,
    "login" TEXT NOT NULL
);
