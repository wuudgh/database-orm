/*
  Warnings:

  - You are about to drop the `Screen` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Screen";

-- CreateTable
CREATE TABLE "Screening" (
    "id" SERIAL NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Screening_pkey" PRIMARY KEY ("id")
);