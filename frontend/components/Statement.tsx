import React from 'react'
import Router from 'next/router'

export type StatementProps = {
 statementID: number;
 content: string;
 coded: boolean;
 comment: string | null;
}

const Statement: React.FC<{statement: StatementProps}> = ({ statement }) => {
 return (
  <div id='statementContent' onClick={() => Router.push('/p/[statementID]', `/p/${statement.statementID}`)}>
    {statement.content}
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
// id: number | null;
 codeUsed: string | null;
 phrase: string | null;
 comments: string | null;
}

// TO DO: Best way to also query and load information about the existing encodings, if any 

export default Statement