import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient()
const app = express()

prisma.$use(async (params, next) => {
 //add check for model and action
 const statementID = params.args.data.statementID
 const content = params.args.data.content
 const highlight = params.args.data.highlight
 const codeUsed = params.args.data.markCode
 
 const result = await next(params)
 return result
})


const router = Router()

app.use(express.json())
app.use(cors())

console.log("marker is here")

//make a mark



router.put('/', async (req, res, next) => {
//  console.log("hello test") - makes it stop working altogether 
  const statementID = req.params
  const content = req.body
  const statement = await prisma.statement.update(
   {
    where: {
     statementID: Number(statementID),
    },
    data: {
     content: content
    }
   })
   res.json(statement)
 })

export default router 