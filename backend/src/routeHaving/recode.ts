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

console.log("recode is here!")

router.put('/', async(req, res, next) => {
 const [ current, html, phrase, codeUsed, oldCode ] = req.params as any;
 const currentID = parseInt(current, 10);
 console.log("received params:"); console.log(req.params) //troubleshooting
 const now = Date.now();
 try {
  const reviseThis = await prisma.encoding.findFirst({
   where: {
    statementID: currentID,
    codeUsed: oldCode,
    phrase: phrase
   },
   select: {
    phraseID: true,
   },
   rejectOnNotFound: true
  });
  const revised = await prisma.encoding.update({
   where: {
    phraseID: reviseThis.phraseID,
   }, 
   data: {
    codeUsed: codeUsed,
   }
  });
  const reviseParent = await prisma.statement.update({
   where: {
    statementID: currentID,
   },
   data: {
    content: html,
    lastSeenAsInt: now
   }
  })
  res.json({revised, reviseParent})
 } catch (e) {console.log(e)}
})

export default router