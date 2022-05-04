import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { Button, Card, Stack } from 'react-bootstrap';
import { GiAllSeeingEye } from 'react-icons/gi'

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

 return (
 <div id={`${statement.statementID}`} className='statementBox' > 
 <Card>
  <Card.Body>
   <div className='statement' id={statement.statementID.toString()} dangerouslySetInnerHTML={{__html: content}}/>
  </Card.Body>
  <Card.Footer>
   <Browsing statement={statement} />
  </Card.Footer>
 </Card>
 </div>
 )
}

const Browsing: React.FC<{statement: StatementProps}> = ({ statement }) => {
 const [ button, setButton ] = useState('outline-danger')
 function checkStatus() {
  {
   if (typeof document !== undefined) {
    const flags = localStorage.getItem('flag');
    if (!(!flags) && flags !== '') {
     setButton('danger')
    } else {
     setButton('outline-danger')
    }
   }
  }
 }
 useEffect(() => checkStatus())
 return (
  <div className='smallbuttons' id='smallbuttons'>
  <Button variant={button} size='sm' id={`f${statement.statementID}`} className='flagCard flagButton button' onMouseLeave={() => checkStatus()}>{ (button === 'danger') ? 'flagged' : 'flag'}</Button>
  <Button aria-label='view this statement' variant='outline-info' size='sm' className='ms-auto viewOne button' onClick={() => Router.push('/s/[statementID]', `/s/${statement.statementID}`)}><GiAllSeeingEye /></Button>
  
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