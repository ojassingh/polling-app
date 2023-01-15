/*
  Warnings:

  - The `dateTime` column on the `Poll` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Poll" DROP COLUMN "dateTime";
ALTER TABLE "Poll" ADD COLUMN     "dateTime" STRING;
