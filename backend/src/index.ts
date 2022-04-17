import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

import reader from './routeHaving/reader'
import unreads from './routeHaving/swathes/inbox' 
import reads from './routeHaving/swathes/outbox'
import all from './routeHaving/swathes/all'

import mobility from './routeHaving/navigation/moving'
import pinstick from './routeHaving/navigation/pinstick'
import random from './routeHaving/navigation/random'

import gloss from './routeHaving/maintenance/codegloss'
import newcode from './routeHaving/maintenance/newcode'

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

app.use(`/go`, mobility)
app.use(`/statement/`, reader)
app.use(`/leave`, pinstick)

//this one still produces 404:
app.use('/random', random)

app.use('/newcode', newcode)
app.use('/gloss', gloss)

app.get('/drafts', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: false },
    include: { author: true }
  })
  res.json(posts)
})

app.get('/feed', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true }
  })
  res.json(posts)
})

app.get('/filterPosts', async (req, res) => {
  const { searchString }: { searchString?: string } = req.query;
  const filteredPosts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchString,
          },
        },
        {
          content: {
            contains: searchString,
          },
        },
      ],
    },
  })
  res.json(filteredPosts)
})

app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

app.get(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: { author: true }
  })
  res.json(post)
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { published: true },
  })
  res.json(post)
})

app.post(`/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
})

//const server = 
app.listen(3001, () =>
  console.log(
    '🚀 Server ready at: http://localhost:3001',
  ),
)
