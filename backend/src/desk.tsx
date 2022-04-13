import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

//How to fetch a statement (and its associated encoding)?

app.get('/unseen', async (req, res) => {
 const statements = await prisma.statement.findMany(
//  {
//   where: { coded: false },
// }
 )
 res.json(statements)
})
