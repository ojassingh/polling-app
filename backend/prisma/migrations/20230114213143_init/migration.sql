/*
  Warnings:

  - You are about to alter the column `id` on the `Poll` table. The data in that column will be cast from `BigInt` to `Int`. This cast may fail. Please make sure the data in the column can be cast.

*/
-- RedefineTables
CREATE TABLE "_prisma_new_Poll" (
    "id" INT4 NOT NULL DEFAULT unique_rowid(),
    "title" STRING NOT NULL,
    "description" STRING,
    "dateTime" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "location" STRING NOT NULL,
    "createdBy" STRING NOT NULL,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);
DROP INDEX "Poll_title_key";
INSERT INTO "_prisma_new_Poll" ("createdBy","dateTime","description","id","location","title") SELECT "createdBy","dateTime","description","id","location","title" FROM "Poll";
DROP TABLE "Poll" CASCADE;
ALTER TABLE "_prisma_new_Poll" RENAME TO "Poll";
CREATE UNIQUE INDEX "Poll_title_key" ON "Poll"("title");
