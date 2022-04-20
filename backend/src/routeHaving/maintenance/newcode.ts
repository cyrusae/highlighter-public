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

console.log("newcode is here")

router.post('/', async (req, res, next) => {
 const newCode = await prisma.codes.create({
  data: {
   shortCode: req.body.shortCode,
   codeName: req.body.codeName,
   codeGloss: req.body.codeGloss,
   colorCode: req.body.colorCode
  },
 })
 res.json(newCode)
})

export default router 