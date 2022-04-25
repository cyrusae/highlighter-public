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

const corsOptions ={
	origin:'http://localhost:3000', 
	credentials:true,            //access-control-allow-credentials:true
	optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions))

console.log("reader is here")

router.get('/:statementID', async (req, res, next) => {
 const received = req.params.statementID as string;
//	console.log("params received"); console.log(req.params);
	const statementID = parseInt(received, 10);
// console.log("value of 'statementID':"); console.log(statementID)

	const recent = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY lastSeenAsInt DESC LIMIT 2`;
//	console.log("output of 'recent' raw query:"); console.log(recent); //troubleshooting
	let fresh: number[] = [];
	for (let i = 0; i < recent.length; i++) {
		fresh.push(recent[i].statementID);
	}
//	console.log("contents of fresh:"); console.log(fresh);
	const lastOne = (fresh: number[], statementID: number) => {
		if (fresh[0] === statementID) {
			return fresh[1];
		} else {
			return fresh[0];
		}
	}
	const prevID = lastOne(fresh, statementID);
//	console.log("lastOne result as prevID:"); console.log(prevID);

	const oldest = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY lastSeenAsInt ASC LIMIT 2`;
//	console.log("output of oldest query:"); console.log(oldest);
	let stale: number[] = [];
	for (let i = 0; i < oldest.length; i++) {
		stale.push(oldest[i].statementID);
	}
//	console.log("contents of stale:"); console.log(stale);
	const nextOne = (stale: number[], statementID: number) => {
		if (stale[0] === statementID) {
			return stale[1];
		} else {
			return stale[0];
		}
	}
	const nextID = nextOne(stale, statementID);
//	console.log("resulting nextOne nextID:"); console.log(nextID);

//THIS NEEDS TESTED:
//	const random = await prisma.$queryRaw<Statement[]>`SELECT * FROM Statement ORDER BY random() LIMIT 4`

//	let randomIDs: number[] = [];
//	for (let i = 0; i < random.length; i++) {
//		randomIDs.push(random[1].statementID);
//	}
//	for (let i = 0; i < randomIDs.length; i++) {
//		const contender = randomIDs[i];
//		if (contender != nextID || contender != prevID || contender != statementID) {
//			i = randomIDs.length; //stop loop
//			return contender;
//		} 
//	}
//END SECTION THAT NEEDS TESTED
//Test and then integrate into a) response and b) buttons

 try 
 {{console.log("check statementID:"); console.log(statementID);
		const statement = await prisma.statement.findUnique({
  where: {
   statementID: statementID,
  }
 });
// console.log(statement); //troubleshooting tool 

// const output = [statement, nextID, prevID]; console.log("value of 'output':"); console.log(output); //troubleshooting tool

 res.json({statement: statement, nextID: nextID, prevID: prevID})}}
 catch (e) {console.log(e)};
 })

export default router 