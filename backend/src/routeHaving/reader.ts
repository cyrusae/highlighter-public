import { PrismaClient, Statement } from '@prisma/client'
import cors from 'cors'
import express from 'express'
import { Router } from 'express'

const prisma = new PrismaClient({
 rejectOnNotFound: {
  findUnique: true
 },
})

const app = express()

const router = Router()

app.use(express.json())
app.use(cors())

console.log("reader is here")

router.get('/:statementID', async (req, res, next) => {
 const { statementID } = req.params as any;
 console.log("value of 'statementID':"); console.log(statementID)
 const big = await prisma.$queryRaw<Statement[]>`SELECT MAX(lastSeenAsInt) FROM Statement`;
 console.log("output of 'big' raw query:"); console.log(big); //troubleshoot
 const mostRecent = big[0].lastSeenAsInt;

 const small = await prisma.$queryRaw<Statement[]>`SELECT MIN(lastSeenAsInt) FROM Statement`;
 console.log("output of 'small' raw query:"); console.log(small);
 const leastRecent = small[0].lastSeenAsInt;
// console.log("output of params:"); console.log(req.params) //troubleshooting tool
// console.log("output of statementID:"); console.log(statementID) //troubleshooting tool

 try 
 {{const statement = await prisma.statement.findUnique({
  where: {
   statementID: (parseInt(statementID, 10)),
  }
 });
// console.log(statement); //troubleshooting tool 
const prevStatement = await prisma.statement.findFirst({
	where: {
		lastSeenAsInt: big[0].lastSeenAsInt,
		statementID: {
			not: statement.statementID
		}
	},
	select: {
		statementID: true,
	},
	rejectOnNotFound: true,
})
const prevID = prevStatement.statementID;
const nextStatement = await prisma.statement.findFirst({
  where: {
//   AND: 
//				[
//					{
						lastSeenAsInt: small[0].lastSeenAsInt,
						statementID: {
							notIn: [statement.statementID, prevID]
						}
//					},
//   	{
//					statementID: {
//     	not: statement.statementID
//					}
//			}]
		},
  select: {
   statementID: true,
  },
		rejectOnNotFound: true,
 });
 const nextID = nextStatement.statementID;


 const output = [statement, nextID, prevID]; console.log("value of 'output':"); console.log(output); //troubleshooting tool

 res.json({statement: statement, nextID: nextID, prevID: prevID})}}
 catch (e) {console.log(e)};
 })

export default router 