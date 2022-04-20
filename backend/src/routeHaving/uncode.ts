import { Encoding, PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { Router } from 'express'

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

console.log("uncode is here!")

router.put('/', async(req, res, next) => {
 const [ current, phrase, html ] = req.params as any;
 const currentID = parseInt(current, 10);
 console.log("received params:"); console.log(req.params); console.log("received current ID:"); console.log(currentID); console.log("received phrase:"); console.log(phrase); //troubleshoot;
 const now = Date.now();
 try {
  const goner = await prisma.encoding.deleteMany({
  //note: due to limitation in how Prisma's search works, deletion will hit every phrase with the exact same contents in a statement, even if you have multiple with different codes for some reason.
  //This could be resolved by overhauling how statements are stored in future but I doubt I'll find it worth it personally.
  //Switching to selecting and then deleting one would also fix itbut instead would only allow deleting the first occurrence.
   where: {
    statementID: currentID,
    phrase: phrase,
   }
  })
  const doUpdate = await prisma.statement.findUnique({
   where: {
    statementID: currentID
   },
   include: {
    _count: {
     select: { Encoding: true } 
    } //Prisma can't filter by number of relations so we're doing this in a bit of a slow way
   },
   rejectOnNotFound: true,
  })
  if (doUpdate._count.Encoding === 0) {
   const parent = await prisma.statement.update({
    where: {
     statementID: currentID
    },
    data: {
     coded: false,
     content: html,
     lastSeenAsInt: now
    }
   });
   res.json({goner, parent})
  } else {
   const parent = await prisma.statement.update({
    where: {
     statementID: currentID,
    },
    data: {
     content: html,
     lastSeenAsInt: now
    }
   });
   res.json({goner, parent})
  }
 } catch (e) {console.log(e)}
})

export default router 