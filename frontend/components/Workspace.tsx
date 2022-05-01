import React, { ReactNode, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import { CodeList } from "./Glossary";
import { StatementProps } from "./Statement"

// import styles from './Statement.module.css'

const StatementBox: React.FC<{sample: StatementProps[], glossary: CodeList[]}> = ( {sample, glossary} ) => {
 let content = sample["content"];
 let statementID = sample["statementID"];

 return (
  <Card>
   <Card.Header>
    ID: {statementID}
   </Card.Header>
   <Card.Text>
    <div className="statext" dangerouslySetInnerHTML={{__html: content}}/>
   </Card.Text>
   <Card.Footer>
    
   </Card.Footer>
  </Card>
)
}

export default StatementBox

//previously:
//<div className='statement' id='statement'>
//<div className='metadata'>ID: {statementID}</div>
//<div className='statebox' id='statebox' dangerouslySetInnerHTML={{__html: content}}/>
//</div>