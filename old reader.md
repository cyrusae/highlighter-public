```
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
 const received = req.params.statementID as string;
	console.log("params received"); console.log(req.params);
	const statementID = parseInt(received, 10);
 console.log("value of 'statementID':"); console.log(statementID)

	const recent = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY lastSeenAsInt DESC LIMIT 2`;
	console.log("output of 'recent' raw query:"); console.log(recent);
	let fresh: number[] = [];
	for (let i = 0; i < recent.length; i++) {
		fresh.push(recent[i].statementID);
	}
	console.log("contents of fresh:"); console.log(fresh);
	const lastOne = (fresh: number[], statementID: number) => {
		if (fresh[0] === statementID) {
			return fresh[1];
		} else {
			return fresh[0];
		}
	}
	console.log("lastOne result:"); console.log(lastOne(fresh, statementID));

	const oldest = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY lastSeenAsInt ASC LIMIT 2`;
	console.log("output of oldest query:"); console.log(oldest);
	let stale: number[] = [];
	for (let i = 0; i < oldest.length; i++) {
		stale.push(oldest[i].statementID);
	}
	console.log("contents of stale:"); console.log(stale);
	const nextOne = (stale: number[], statementID: number) => {
		if (stale[0] === statementID) {
			return stale[1];
		} else {
			return stale[0];
		}
	}
	console.log("resulting nextOne:"); console.log(nextOne(stale, statementID));


 try 
 {{console.log("check statementID:"); console.log(statementID);
		const statement = await prisma.statement.findUnique({
  where: {
   statementID: statementID,
  }
 });
// console.log(statement); //troubleshooting tool 
const prevStatement = await prisma.statement.findFirst({
	where: {
//		lastSeenAsInt: {
//			gte: big[0].lastSeenAsInt,
//			not: statement.lastSeenAsInt
//		},
		statementID: {
			not: statement.statementID,
			in: fresh
		}
	},
	rejectOnNotFound: true,
})
console.log("found as prevStatement:"); console.log(prevStatement);
const prevID = prevStatement.statementID;
const nextStatement = await prisma.statement.findFirst({
 where: {
//						lastSeenAsInt: {
//							lte: small[0].lastSeenAsInt,
//							equals: leastRecent
//						},
	statementID: {
//							not: prevID,
		notIn: [statement.statementID, prevID],
		in: stale
		}
		},
 });
	console.log("found as nextStatement:"); console.log(nextStatement);
 const nextID = nextStatement?.statementID;

 const output = [statement, nextID, prevID]; console.log("value of 'output':"); console.log(output); //troubleshooting tool

 res.json({statement: statement, nextID: nextID, prevID: prevID})}}
 catch (e) {console.log(e)};
 })

export default router 
```