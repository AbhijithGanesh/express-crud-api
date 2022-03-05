-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT,
    "additional_details" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "email" VARCHAR(200),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
