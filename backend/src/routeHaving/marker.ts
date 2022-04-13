import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient()
const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("marker is here")

//make a mark

router.put('/', async (req, res, next) => {
//  console.log("hello test") - makes it stop working altogether 
  const statements = await prisma.statement.findMany(
   {
    where: { coded: false },
   }
  )
  res.json(statements)
 })

export default router 