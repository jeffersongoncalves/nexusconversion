-- CreateTable
CREATE TABLE "Cryptcurrency" (
    "id" SERIAL NOT NULL,
    "currency" TEXT NOT NULL,
    "user_id" INTEGER,

    CONSTRAINT "Cryptcurrency_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cryptcurrency_currency_key" ON "Cryptcurrency"("currency");

-- AddForeignKey
ALTER TABLE "Cryptcurrency" ADD CONSTRAINT "Cryptcurrency_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
