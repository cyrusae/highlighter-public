import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient({
 rejectOnNotFound: {
  findUnique: true
 },
})

const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("reader is here")

router.get('/', async (req, res, next) => {
 const statementID = req.params
 const statement = await prisma.statement.findUnique({
  where: {
   statementID: Number(statementID),
  },
 })
 res.json(statement)
 })

export default router 