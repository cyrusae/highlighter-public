import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

//How to fetch a statement (and its associated encoding)?
app.get(`/:id`, async(req, res) => {
 const { id } = req.params
 const statement = await prisma.statement.findUnique({
  where: {
   statementID: Number(id),
  },
 })
 res.json(statement)
})

//How to update the body text (with mark additions), and add a record of coding having happened, AND conditionally add comments if needed?
app.put(`/upd8`, async(req, res) => {
 const { id } = req.params
 const { content } = req.body
 const refresh = await prisma.statement.update({
  where: { id: Number(id) },
  data: {
   
  }
 })
 res.json(refresh)
})

//would this create a new encoding...?
app.put(`/code`, async(req, res) => {
 const coding = await prisma.encoding.create({
  data: {
   ...req.body,
  }
 })
 res.json(coding)
})