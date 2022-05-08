/*
  Warnings:

  - You are about to drop the column `data` on the `Film` table. All the data in the column will be lost.
  - Added the required column `title` to the `Film` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Film" DROP COLUMN "data",
ADD COLUMN     "title" TEXT NOT NULL;
