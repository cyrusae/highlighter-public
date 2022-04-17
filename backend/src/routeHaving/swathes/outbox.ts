import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient()
const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("outbox is here")

router.get('/', async (req, res, next) => {
  const statements = await prisma.statement.findMany(
   {
    where: { coded: true },
   }
  )
  res.json(statements)
 })

export default router 