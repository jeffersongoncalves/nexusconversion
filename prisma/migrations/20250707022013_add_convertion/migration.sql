-- CreateTable
CREATE TABLE "Convertion" (
    "id" SERIAL NOT NULL,
    "currency" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "value_usd" DECIMAL(65,30) NOT NULL,
    "value_brl" DECIMAL(65,30) NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "Convertion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Convertion" ADD CONSTRAINT "Convertion_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
