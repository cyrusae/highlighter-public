import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

//How to fetch a statement (and its associated encoding)?

app.get(`/:statementID`, async(req, res) => {
 const { statementID } = req.params
 const statement = await prisma.statement.findUnique({
  where: {
   statementID: Number(statementID),
  },
 })
 res.json(statement)
})

//How to update the body text (with mark additions), and add a record of coding having happened, AND conditionally add comments if needed?
app.put(`/upd8/:statementID`, async(req, res) => {
 const { statementID } = req.params
 const { content } = req.body
 const refresh = await prisma.statement.update({
  where: { statementID: Number(statementID) },
  data: {
   ...req.body,
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

const server = app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)