import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient()
const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("gloss is here")

router.get('/', async (req, res, next) => {
 const codes = await prisma.codes.findMany();
 console.log("codes gotten:"); console.log(codes); //troubleshooting tool
 res.json(codes);
})

export default router 