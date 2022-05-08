/*
  Warnings:

  - Added the required column `adult` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `media_type` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `original_language` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_date` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_average` to the `Film` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote_count` to the `Film` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Film" ADD COLUMN     "adult" BOOLEAN NOT NULL,
ADD COLUMN     "media_type" TEXT NOT NULL,
ADD COLUMN     "original_language" TEXT NOT NULL,
ADD COLUMN     "overview" TEXT NOT NULL,
ADD COLUMN     "release_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vote_average" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "vote_count" INTEGER NOT NULL;
