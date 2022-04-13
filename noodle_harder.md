So:
```
router.put('/seen', async (req, res, next) => {
  const { statementID, content } = req.body;
  const statement = await prisma.statement.update(
  {
  where: {
    statementID: statementID
  },
  data: {
    coded: true,
    content: content,
  }
  }
  ) 
  res.json(statement)
  next()
})

router.post('/seen', async (req, res, next) => {
  const { phrase, codeUsed, statementID } = req.body
  const coding = await prisma.encoding.create({
    data: {
      phrase: phrase,
      codeUsed: codeUsed,
      parent: {
        connect: [{ parent: statementID }] 
      }
    },
  }  )
  res.json(coding)
})
```
This is for later, as I try to understand how to update the database with a) new statement content and b) the new encoding for the statement, with the relevant relational link.

For now, `create` is preventing the backend from running, because it's a huge dick.

Go to next unseen as...?

```
await prisma.statement.findFirst({
  coded: false
})