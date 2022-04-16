import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient()
const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("stick a pin in it, it is here");

router.put('/', async (req, res, next) => {
 const { statementID } = req.params as any
 console.log(req.params) //troubleshooting tool
 console.log(statementID) //troubleshooting tool
 let now = Date.now();
 try {
  const seenIt = await prisma.statement.update({
  where: {
   statementID: (parseInt(statementID, 10)),
  }, 
  data: {
   lastSeenAsInt: now,
  }
 })
} catch (e) {console.log(e)}}
 )