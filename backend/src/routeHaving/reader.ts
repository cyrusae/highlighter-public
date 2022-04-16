import { PrismaClient, Statement } from '@prisma/client'
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
 const big = await prisma.$queryRaw<Statement[]>`SELECT MAX(lastSeenAsInt) FROM Statement`;
 console.log("output of 'big' raw query:"); console.log(big); //troubleshoot
 const mostRecent = big[0].lastSeenAsInt;

 const small = await prisma.$queryRaw<Statement[]>`Select MIN(lastSeenAsInt) FROM Statement`;
 console.log("output of 'small' raw query:"); console.log(small);
 const leastRecent = small[0].lastSeenAsInt;
// console.log(req.params) //troubleshooting tool
// console.log(statementID) //troubleshooting tool
 try 
 {{const statement = await prisma.statement.findUnique({
  where: {
   statementID: (parseInt(statementID, 10)),
  }
 });
// console.log(statement); //troubleshooting tool 
 const nextStatement = await prisma.statement.findFirst({
  where: {
   OR: [
     {
      lastSeenAsInt: null,
     },
     {
      coded: false,
     },
     {
      lastSeenAsInt: leastRecent,
     } //concern: is this hierarchical? will I be at risk of looping through the first and second one I code once anything has a non-null lastSeenAsInt?
   ],
   NOT: {
    statementID: statement.statementID
   }
  },
  select: {
   statementID: true,
  }
 });
 const prevStatement = await prisma.statement.findFirst({
  where: {
   OR: [
     {
      lastSeenAsInt: mostRecent,
     },
     {
      coded: true,
     },
     {
      NOT: {
       lastSeenAsInt: null
      },
     } //concern: is this hierarchical? will I be at risk of looping through the first and second one I code once anything has a non-null lastSeenAsInt?
   ],
   NOT: {
    statementID: statement.statementID
   }
  },
  select: {
   statementID: true,
  }
 })
 const nextID = nextStatement?.statementID;
 const prevID = prevStatement?.statementID;

 const output = [statement, nextID, prevID];
 console.log("value of 'output':"); console.log(output); //troubleshooting tool
 res.json({statement: statement, nextID: nextID, prevID: prevID})}}
 catch (e) {console.log(e)};
 })

export default router 