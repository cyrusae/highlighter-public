import { Prisma, PrismaClient, Statement } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient({
 rejectOnNotFound: 
 { findFirst: true }
}
)

const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("moving is here")

// 1. update currentID's record to have the now time
// 2. check what the act is ('next', 'prev')
// 3. 
//   a) next: check for lesser or null intdates and return the first one
//   b) prev: check for largest intdate that isn't this one, and return ID for first instance of that
// 4. redirect to `/s/whateverwegotoutofthat`

router.get('/go', async(req, res, next) => {
 const act = req.query.act as string;
 console.log("act:"); console.log(act); //troubleshoot

 const current = req.query.current as string;
 const currentID = parseInt(current, 10);
 console.log("current ID:"); console.log(currentID); //troubleshoot
 const now = Date.now();
 prisma.statement.update({
  where: {
   statementID: currentID
  }, 
  data: {
   lastSeenAsInt: now
  }
 })

 const big = await prisma.$queryRaw<Statement[]>`SELECT MAX(lastSeenAsInt) AS big FROM Statements WHERE statementID NOT ${currentID}`;
 console.log("output of 'big' raw query:"); console.log(big); //troubleshoot
 const mostRecent = big[0].lastSeenAsInt;

 const small = await prisma.$queryRaw<Statement[]>`Select MIN(lastSeenAsInt) AS small FROM Statements`;
 console.log("output of 'small' raw query:"); console.log("small");
 const leastRecent = small[0].lastSeenAsInt;
 
 if (act === 'next') {
  const goTo = await prisma.statement.findFirst({
   where: {
    lastSeenAsInt: leastRecent,
    statementID: {
     not: currentID
    },
  },
  select: {
    statementID: true
   }
  })
  let destination = goTo.statementID;
  console.log("destination:"); console.log(destination); //troubleshoot
  res.redirect(`/s/${destination}`); 
 } else if (act === 'prev') {
  const goTo = await prisma.statement.findFirst({
    where: {
     lastSeenAsInt: mostRecent,
     statementID: {
      not: currentID
     },
   }, 
  select: {
    statementID: true
   }
  })
  let destination = goTo.statementID;
  console.log("destination:"); console.log(destination); //troubleshoot  
  res.redirect(`/s/${destination}`); 
 }
})

export default router 