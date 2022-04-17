-- CreateTable
CREATE TABLE "Statement" (
    "statementID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "coded" BOOLEAN NOT NULL DEFAULT false,
    "comments" TEXT
);

-- CreateTable
CREATE TABLE "Encoding" (
    "parentID" INTEGER NOT NULL,
    "codeUsed" TEXT NOT NULL,
    "phrase" TEXT NOT NULL,
    "comments" TEXT,
    "phraseID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "statementStatementID" INTEGER NOT NULL,
    CONSTRAINT "Encoding_statementStatementID_fkey" FOREIGN KEY ("statementStatementID") REFERENCES "Statement" ("statementID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Statement_statementID_key" ON "Statement"("statementID");
