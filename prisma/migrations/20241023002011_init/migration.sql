-- CreateTable
CREATE TABLE "medicines" (
    "id" SERIAL NOT NULL,
    "tradeName" TEXT NOT NULL,
    "activeIngredient" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "dosage" INTEGER NOT NULL,
    "dosageUnit" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("id")
);
