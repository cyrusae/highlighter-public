import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { Router } from 'express'

const prisma = new PrismaClient()
const app = express()
const router = Router()

app.use(express.json())
app.use(cors())

console.log("highlighter is here!")

router.put('/', async(req, res, next) => {

//have the axios put have the following:
// - currentID: current statement ID;
// - now: calculate now;
// - annot8: the updated innerHTML;
// - plaintext: the innerText;
// - phrase: the highlighted phrase;
// - codeUsed: the code used (in the dropdown)

 const statementID = parseInt(req.body.currentID, 10);
	const now = parseInt(req.body.now, 10);
	const annot8 = req.body.annot8 as string;
	const plaintext = req.body.plain as string;
	const phrase = req.body.phrase as string;
	const codeUsed = req.body.code as string;
	try {
		const coding = await prisma.statement.update({
			where: {
				statementID: statementID
			},
			data: {
				content: annot8,
				plainText: plaintext,
				coded: true,
				lastSeenAsInt: now,
				Encoding: {
					create: [
						{ 
							codeUsed: codeUsed,
							phrase: phrase,
						}
					]
				}
			}
		});
		res.json(coding);
	} catch (e) {console.log(e)}
})

export default router 