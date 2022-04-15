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

router.get('/:statementID', async (req, res, next) => {
 const { statementID } = req.params as any
// console.log(req.params) //troubleshooting tool
// console.log(statementID) //troubleshooting tool
 try 
 {{const statement = await prisma.statement.findUnique({
  where: {
   statementID: (parseInt(statementID, 10)),
  }
 })
// console.log(statement); //troubleshooting tool 
// console.log(statement.content); //troubleshooting tool
 res.json(statement)}}
 catch (e) {console.log(e)};
 })

export default router 