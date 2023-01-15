/*
  Warnings:

  - You are about to alter the column `id` on the `Poll` table. The data in that column will be cast from `Int` to `BigInt`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Poll" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "date" STRING NOT NULL,
    "location" STRING NOT NULL,
    "creator" STRING NOT NULL,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);
INSERT INTO "_prisma_new_Poll" ("creator","date","description","id","location","title") SELECT "creator","date","description","id","location","title" FROM "Poll";
DROP TABLE "Poll" CASCADE;
ALTER TABLE "_prisma_new_Poll" RENAME TO "Poll";
