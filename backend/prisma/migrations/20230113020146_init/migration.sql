/*
  Warnings:

  - You are about to drop the column `body` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Poll` table. All the data in the column will be lost.
  - Made the column `location` on table `Poll` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Poll_title_key";

-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "body",
DROP COLUMN "createdAt",
ALTER COLUMN "dateTime" DROP NOT NULL,
ALTER COLUMN "location" SET NOT NULL;
