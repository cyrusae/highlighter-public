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
 const { statementID } = req.params as any;
 console.log("value of 'statementID':"); console.log(statementID)
 const big = await prisma.$queryRaw<Statement[]>`SELECT MAX(lastSeenAsInt) FROM Statement`;
 console.log("output of 'big' raw query:"); console.log(big); //troubleshoot
 const mostRecent = big[0].lastSeenAsInt;

 const small = await prisma.$queryRaw<Statement[]>`SELECT MIN(lastSeenAsInt) FROM Statement`;
 console.log("output of 'small' raw query:"); console.log(small);
 const leastRecent = small[0].lastSeenAsInt;
 console.log("output of params:"); console.log(req.params) //troubleshooting tool
 console.log("output of statementID:"); console.log(statementID) //troubleshooting tool

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
 let nextID = nextStatement?.statementID;
 let prevID = prevStatement?.statementID;

 const output = [statement, nextID, prevID]; console.log("value of 'output':"); console.log(output); //troubleshooting tool
 if (prevID === undefined || prevID === nextID) { 
  const head = Math.floor(Math.random() * 2);
  const tail = Math.abs(head - 1); 
 try {
  const random = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY random() LIMIT 2`;
  if (random[head].statementID != statement.statementID) {
   let prevID = random[head].statementID;
   console.log("randomized prevID:"); console.log(prevID);
   res.json({statement: statement, nextID: nextID, prevID: prevID});
   return;
//   return prevID;
  } else {
   let prevID = random[tail].statementID;
   console.log("randomized prevID:"); console.log(prevID);
   res.json({statement: statement, nextID: nextID, prevID: prevID});
   return;
//   return prevID;
  }
 }
  catch (e) { console.log(e) }
 }
 if (nextID === undefined || nextID === prevID) { 
  const head = Math.floor(Math.random() * 2);
  const tail = Math.abs(head - 1); 
 try {
  const random = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY random() LIMIT 2`;
  if (random[head].statementID != statement.statementID) {
   let nextID = random[head].statementID;
   res.json({statement: statement, nextID: nextID, prevID: prevID})
   console.log("randomized nextID:"); console.log(nextID);
   return;
//   return nextID;
  } else {
   let nextID = random[tail].statementID;
   console.log("randomized nextID:"); console.log(nextID);
   res.json({statement: statement, nextID: nextID, prevID: prevID});
   return;
//   return nextID;
  }
 }
  catch (e) { console.log(e) }
 }
 res.json({statement: statement, nextID: nextID, prevID: prevID})}}
 catch (e) {console.log(e)};
 })

export default router 