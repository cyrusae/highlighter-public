import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'
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
 const { currentID, lastUpdated } = req.params as any

 console.log("params:"); console.log(req.params) //troubleshooting tool
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

 res.json(nextStatement.statementID);
 res.redirect('/statement/')
 }
 }
 catch (e) {console.log(e)};
 app.use(`/statement/`, reader)
})


export default router