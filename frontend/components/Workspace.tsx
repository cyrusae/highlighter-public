import React, { ReactNode, useEffect } from "react"
import { CodeList } from "./Glossary";
import { StatementProps } from "./Statement"

// import styles from './Statement.module.css'

const StatementBox: React.FC<{sample: StatementProps[], glossary: CodeList[]}> = ( {sample, glossary} ) => {
 let content = sample["content"];
 let statementID = sample["statementID"];

 return (
 <div className='statement' id='statement'>
  <div className='metadata'>ID: {statementID}</div>
  <div className='statebox' id='statebox' dangerouslySetInnerHTML={{__html: content}}/>
 </div>
)
}

export default StatementBox