-- CreateTable
CREATE TABLE "Response" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "confirmation" STRING NOT NULL,
    "pollID" STRING NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Poll" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "date" STRING NOT NULL,
    "location" STRING NOT NULL,
    "creator" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Response_id_key" ON "Response"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Poll_id_key" ON "Poll"("id");

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_pollID_fkey" FOREIGN KEY ("pollID") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
