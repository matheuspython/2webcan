-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tecnologias" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imgHost" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "InicioProjeto" TEXT NOT NULL,
    "FimProjeto" TEXT NOT NULL
);
INSERT INTO "new_PostList" ("FimProjeto", "InicioProjeto", "descricao", "host", "id", "imgHost", "tecnologias", "titulo") SELECT "FimProjeto", "InicioProjeto", "descricao", "host", "id", "imgHost", "tecnologias", "titulo" FROM "PostList";
DROP TABLE "PostList";
ALTER TABLE "new_PostList" RENAME TO "PostList";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
