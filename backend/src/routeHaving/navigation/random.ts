import { PrismaClient, Statement } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient();
const app = express();
const router = Router();

const corsOptions ={
 origin:'http://localhost:3000', 
 credentials:true,            //access-control-allow-credentials:true
 optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions))

console.log("randomizer is here")

//Not working yet!

router.get('/', async (req, res, next) => {
 const grabBag = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY random() LIMIT 10`;
 const grab = Math.ceil(Math.random() * grabBag.length);
 const statement = grabBag[grab];
 console.log("randomly-grabbed statement has the ID:"); console.log(statement.statementID);
 res.location(`/s/${statement.statementID}`)
})

export default router