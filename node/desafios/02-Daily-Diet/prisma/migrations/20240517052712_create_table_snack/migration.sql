-- CreateTable
CREATE TABLE "Snack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date_and_time" TIMESTAMP(3) NOT NULL,
    "is_inside" BOOLEAN NOT NULL,
    "session_id" TEXT NOT NULL,

    CONSTRAINT "Snack_pkey" PRIMARY KEY ("id")
);
