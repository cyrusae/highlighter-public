import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'
import { resourceUsage } from 'process'
import reader from '../reader'

const prisma = new PrismaClient({
 rejectOnNotFound: 
 { findFirst: true }
}
)

const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("next is here")

router.get('/', async(req, res, next) => {
 const current = req.query.current as string;
 const nowString = req.query.now as string;

 const now = parseInt(nowString, 10);
 const currentID = parseInt(current, 10);
// const lastUpdated = Date.parse(now);
 
 console.log("query:"); console.log(req.query) //troubleshooting tool
 console.log("value of 'currentID':"); console.log(currentID) //troubleshooting tool
 console.log("value of 'now':"); console.log(now)

 try {
  prisma.$use(async (params, next) => {
   console.log("prisma thinks params are:"); console.log(params);
   const result = await next(params);
   console.log("prisma thinks result is:"); console.log(result);
  })

  const nextStatement = await prisma.statement.findFirst({
  where: {
   OR: [
    { 
     lastSeenAsInt: {
      lte: now
    },
   },
   {
    coded: {
     not: true
    },
   },
   {
    lastSeenAsInt: null,
   }
   ],
   AND: [ 
    { 
     statementID: {
      not: currentID
    }
   },
  ],
 },
 });
 console.log('returned statementID:'); console.log(nextStatement.statementID);
 console.log('returned nextStatement:'); console.log(nextStatement);
 const next = nextStatement.statementID;
 res.json(nextStatement.statementID);
// res.redirect(`/s/${next}`, 303)
 }
 catch (e) {console.log(e)}
 finally {
  try { 
   const leaveThisStatement = await prisma.statement.update({
    where: {
     statementID: currentID,
    },
    data: {
     lastSeenAsInt: now
    }
   })
 } catch (e) {console.log(e)}
}}
)

//app.use(`/statement/`, reader)

export default router