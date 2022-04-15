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
 const { currentID, lastUpdated } = req.query as any

 console.log("query:"); console.log(req.query) //troubleshooting tool
 console.log("value of 'currentID':"); console.log(currentID) //troubleshooting tool

 try {{const nextStatement = await prisma.statement.findFirst({
  where: {
   OR: [
    { 
     updatedAt: {
     lt: lastUpdated
    },
     coded: {
      not: true
     }
    },
   ],
   AND: [ 
    { statementID: {
    not: (parseInt(currentID, 10))
    }},
  ],
 },
 });
 console.log('returned statementID:'); console.log(nextStatement.statementID);
 console.log('returned nextStatement:'); console.log(nextStatement);
 const next = nextStatement.statementID;
 res.json(nextStatement.statementID);
 res.redirect(`/s/${next}`, 303)
}
 }
 catch (e) {console.log(e)};
})

//app.use(`/statement/`, reader)

export default router