import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'
import { resourceUsage } from 'process'

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
 console.log(statement);
 console.log(statement.content);
 res.json(statement)}}
 catch (e) {console.log(e)};
 res.status(500).send("fucking 500")
 })

export default router 