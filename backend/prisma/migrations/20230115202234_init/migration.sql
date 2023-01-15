/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Poll` table. All the data in the column will be lost.
  - You are about to drop the column `dateTime` on the `Poll` table. All the data in the column will be lost.
  - Added the required column `creator` to the `Poll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "createdBy";
ALTER TABLE "Poll" DROP COLUMN "dateTime";
ALTER TABLE "Poll" ADD COLUMN     "creator" STRING NOT NULL;
ALTER TABLE "Poll" ADD COLUMN     "date" STRING;
