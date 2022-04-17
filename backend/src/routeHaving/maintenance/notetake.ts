import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient()
const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("notetake is here")

router.post('/', async (req, res, next) => {
 const note = await prisma.codingNotes.create({
  data: {
   noteContent: req.body.content,
   noteType: req.body.type
  },
 })
 res.json(note)
})

export default router 