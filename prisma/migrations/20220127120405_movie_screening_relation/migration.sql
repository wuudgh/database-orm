/*
  Warnings:

  - Added the required column `screeningId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movieId` to the `Screening` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "screeningId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Screening" ADD COLUMN     "movieId" INTEGER NOT NULL;
