import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

//display statements:
import reader from './routeHaving/reader'
import unreads from './routeHaving/swathes/inbox' 
import reads from './routeHaving/swathes/outbox'
import all from './routeHaving/swathes/all'

//navigation and session management:
import pinstick from './routeHaving/navigation/pinstick'
//import random from './routeHaving/navigation/random'

//handle coding:
import gloss from './routeHaving/maintenance/codegloss'
import newcode from './routeHaving/maintenance/newcode'
import savenote from './routeHaving/maintenance/notetake'

//highlight:
import highlighter from './routeHaving/highlighter'
import recode from './routeHaving/recode'
import uncode from './routeHaving/uncode'

const prisma = new PrismaClient()
const app = express()

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions))

app.use('/unseen', unreads)
app.use('/seen', reads)
app.use('/all', all)
app.use('/upd8/', highlighter)
app.use('/recode/', recode)
app.use('/uncode/', uncode)

app.use('/saveflags', savenote)
app.use(`/statement/`, reader)
app.use('/leave/', pinstick)

//this one still produces 404:
//app.use('/random', random)

app.use('/newcode', newcode)
app.use('/gloss', gloss)

//const server = 
app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)