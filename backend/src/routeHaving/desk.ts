import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'
import { nextTick } from 'process'

const prisma = new PrismaClient()
const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("desk is here")

//How to fetch a statement (and its associated encoding)?

//app.get('/unseen', async (req, res) => {
// const statements = await prisma.statement.findMany(
//  {
//   where: { coded: false },
// })
// res.json(statements)
//})

router.get('/', async (req, res, next) => {
//  console.log("hello test") - makes it stop working altogether 
  const statements = await prisma.statement.findMany(
   {
    where: { coded: false },
   }
  )
  res.json(statements)
 })


//const server = app.listen(3001, () =>
//  console.log(
//    '🚀 Server ready at: http://localhost:3001',
 // ),
//)

export default router 