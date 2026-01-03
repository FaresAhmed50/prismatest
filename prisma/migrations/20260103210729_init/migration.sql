-- CreateEnum
CREATE TYPE "UserSigningMethode" AS ENUM ('DEFAULT', 'GOOGLE');

-- CreateTable
CREATE TABLE "Users" (
    "user_id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "fName" VARCHAR(50) NOT NULL,
    "lName" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "settings" JSONB NOT NULL DEFAULT '{"theme": "dark", "lang": "en"}',
    "signing_methodes" "UserSigningMethode" NOT NULL DEFAULT 'DEFAULT',
    "password" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "last_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
