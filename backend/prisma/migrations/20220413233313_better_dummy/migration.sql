/*
  Warnings:

  - You are about to drop the column `parentID` on the `Encoding` table. All the data in the column will be lost.
  - You are about to drop the column `statementStatementID` on the `Encoding` table. All the data in the column will be lost.
  - You are about to drop the column `opened` on the `Statement` table. All the data in the column will be lost.
  - Added the required column `codedAt` to the `Encoding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statementID` to the `Encoding` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Stimuli" (
    "stimulusID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Questions" (
    "questionID" INTEGER NOT NULL,
    "topic" TEXT,
    "type" TEXT,
    "section" TEXT NOT NULL,
    "subsection" TEXT,
    "closed" BOOLEAN NOT NULL,
    "mandatory" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Options" (
    "questionID" INTEGER NOT NULL,
    "option" TEXT NOT NULL,
    "optionGloss" TEXT,

    PRIMARY KEY ("questionID", "option"),
    CONSTRAINT "Options_questionID_fkey" FOREIGN KEY ("questionID") REFERENCES "Questions" ("questionID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StatementContext" (
    "statementID" INTEGER NOT NULL,
    "stimulusID" INTEGER NOT NULL,
    "questionID" INTEGER NOT NULL,
    "participantID" INTEGER NOT NULL,
    CONSTRAINT "StatementContext_stimulusID_fkey" FOREIGN KEY ("stimulusID") REFERENCES "Stimuli" ("stimulusID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StatementContext_questionID_fkey" FOREIGN KEY ("questionID") REFERENCES "Questions" ("questionID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StatementContext_statementID_fkey" FOREIGN KEY ("statementID") REFERENCES "Statement" ("statementID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StatementContext_participantID_fkey" FOREIGN KEY ("participantID") REFERENCES "Participants" ("participantID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StatementAbstract" (
    "statementID" INTEGER NOT NULL,
    "abstracted" TEXT,
    CONSTRAINT "StatementAbstract_statementID_fkey" FOREIGN KEY ("statementID") REFERENCES "Statement" ("statementID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Participants" (
    "participantID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Codes" (
    "shortCode" TEXT NOT NULL,
    "codeName" TEXT,
    "codeGloss" TEXT,
    "colorCode" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Encoding" (
    "codeUsed" TEXT NOT NULL,
    "phrase" TEXT NOT NULL,
    "comments" TEXT,
    "phraseID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "statementID" INTEGER NOT NULL,
    "codedAt" DATETIME NOT NULL,
    CONSTRAINT "Encoding_statementID_fkey" FOREIGN KEY ("statementID") REFERENCES "Statement" ("statementID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Encoding_codeUsed_fkey" FOREIGN KEY ("codeUsed") REFERENCES "Codes" ("shortCode") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Encoding" ("codeUsed", "comments", "phrase", "phraseID") SELECT "codeUsed", "comments", "phrase", "phraseID" FROM "Encoding";
DROP TABLE "Encoding";
ALTER TABLE "new_Encoding" RENAME TO "Encoding";
CREATE TABLE "new_Statement" (
    "statementID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "plainText" TEXT,
    "coded" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comments" TEXT
);
INSERT INTO "new_Statement" ("coded", "comments", "content", "statementID") SELECT "coded", "comments", "content", "statementID" FROM "Statement";
DROP TABLE "Statement";
ALTER TABLE "new_Statement" RENAME TO "Statement";
CREATE UNIQUE INDEX "Statement_statementID_key" ON "Statement"("statementID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Stimuli_stimulusID_key" ON "Stimuli"("stimulusID");

-- CreateIndex
CREATE UNIQUE INDEX "Questions_questionID_key" ON "Questions"("questionID");

-- CreateIndex
CREATE UNIQUE INDEX "StatementContext_statementID_key" ON "StatementContext"("statementID");

-- CreateIndex
CREATE UNIQUE INDEX "StatementAbstract_statementID_key" ON "StatementAbstract"("statementID");

-- CreateIndex
CREATE UNIQUE INDEX "Participants_participantID_key" ON "Participants"("participantID");

-- CreateIndex
CREATE UNIQUE INDEX "Codes_shortCode_key" ON "Codes"("shortCode");
