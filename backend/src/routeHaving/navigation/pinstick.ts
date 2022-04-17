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

console.log("stick a pin in it, it is here");

router.put('/', async (req, res, next) => {
 const statementID = parseInt(req.body.currentID, 10);
 const now = parseInt(req.body.now);
 console.log(req.params) //troubleshooting tool
 console.log(statementID) //troubleshooting tool
 try {
  const seenIt = await prisma.statement.update({
  where: {
   statementID: statementID,
  }, 
  data: {
   lastSeenAsInt: now,
  }
 })
// console.log("If that update happened successfully..."); console.log(seenIt); //troubleshooting
 res.json(seenIt)
} catch (e) {console.log(e)}}
 )

export default router