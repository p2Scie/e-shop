-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'GUEST');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CANCELLED', 'CONFIRMED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('ACCEPTED', 'REFUSED', 'PENDING');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "email" VARCHAR(60) NOT NULL,
    "firstname" VARCHAR(30),
    "lastname" VARCHAR(30),
    "password" VARCHAR(255),
    "address" VARCHAR(255),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Film" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "vote_count" INTEGER NOT NULL,
    "original_language" TEXT NOT NULL,
    "media_type" TEXT NOT NULL,
    "adult" BOOLEAN NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_filmId_key" ON "Stock"("filmId");

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
