import React, { useEffect } from 'react'
import Router from 'next/router'
import { Button, Card, Stack } from 'react-bootstrap';

export type StatementProps = {
 statementID: number;
 content: string;
 coded: boolean;
 comment: string | null;
 updatedAt: Date;
// nextID: number | null;
// prevID: number | null;
}

const Statement: React.FC<{statement: StatementProps}> = ({ statement }) => {
//  console.log(statement);
 let content = statement.content;
 let IDstring = statement.statementID.toString()

 return (
 <div id={`${statement.statementID}`} className='statementBox' > 
 <Card body>
  <Card.Text>
   <div className='statement' id={statement.statementID.toString()} dangerouslySetInnerHTML={{__html: content}}/>
  </Card.Text>
  <Stack direction='horizontal'>
  <Button variant='danger' size='sm' id={`${statement.statementID}`} className='flagCard' disabled>flag</Button>
  <Button variant='info' size='sm' className='ms-auto' onClick={() => Router.push('/s/[statementID]', `/s/${statement.statementID}`)}>view</Button>
  
  </Stack>
  
 </Card>
 </div>
 )
}

// Previously I'd had this in:
// <div id='notes'>
//<StatementAnnotation comment={statement.comment} />
// </div>
// However, since annotations will need to be directly editable, best to leave for later.


function StatementAnnotation(props: { comment: string | null }) {
 const comments = props.comment;
 if (comments === null) {
  return (
   <>
    Add ability to add comments.
   </>
  )
 }
 return (
  <>
   {comments}
  </>
 )
}

export type EncodingProps = {
 parent: number | null;
 codeUsed: string | null;
 phrase: string | null;
 comments: string | null;
}

// TO DO: Best way to also query and load information about the existing encodings, if any 

export default Statement