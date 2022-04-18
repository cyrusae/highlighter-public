import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient()
const app = express()

const router = Router()

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions))

console.log("desk is here")

router.get('/', async (req, res, next) => {
  const statements = await prisma.statement.findMany(
   {
    where: { coded: false },
   }
  )
  res.json(statements)
 })

export default router 