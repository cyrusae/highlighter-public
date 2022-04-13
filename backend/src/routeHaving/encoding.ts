import { Prisma, PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { Router } from 'express'

const prisma = new PrismaClient()

const app = express()
const router = Router()

app.use(express.json())
app.use(cors())

export const highlightAndEncode = (
 statementID: number,
 content: string,
 coded: true,
 phrase: string,
 codeUsed: string,
) => {
 return Prisma.validator<Prisma.StatementCreateInput>()({
  statementID,
  content,
  coded,
  Encoding: {
   create: {
    phrase: phrase,
    parentID: statementID,
    codeUsed: codeUsed
   }
  }
 })
}

export const findGivenStatement = (statementID: number) => {
 return Prisma.validator<Prisma.StatementWhereUniqueInput>()({
  statementID,
 })
}

export const findCodingsOfStatement = (statementID: number) => {
 return Prisma.validator<Prisma.EncodingWhereInput>()({
  parentID: statementID
 })
}

router.put('/', async (req, res, next) => {
 const statementID = req.params
 const coded = true
 const { content, phrase, codeUsed } = req.body
 const encoding = await prisma.statement.update({
  where: {
   statementID: Number(statementID)
  },
  data: highlightAndEncode(
   Number(statementID),
   String(content),
   coded,
   String(phrase),
   String(codeUsed)
  )
 })
res.json(encoding)
})

export default router 