-- AlterTable
ALTER TABLE "Poll" ADD COLUMN     "responses" STRING[] DEFAULT ARRAY[]::STRING[];
