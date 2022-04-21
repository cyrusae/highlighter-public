import React, { ReactNode, useEffect } from "react"
import { CodeList } from "./Glossary";
import { StatementProps } from "./Statement"
import Card from 'react-bootstrap/Card'

// import styles from './Statement.module.css'

const StatementBox: React.FC<{sample: StatementProps[], glossary: CodeList[]}> = ( {sample, glossary} ) => {
 let content = sample["content"];
 let statementID = sample["statementID"];

 return (
 <Card className='statement' id='statement'>
  <Card.Header className='metadata'>ID: {statementID}</Card.Header>
  <Card.Body className='statebox' id='statebox' dangerouslySetInnerHTML={{__html: content}}/>
 </Card>
)
}

export default StatementBox