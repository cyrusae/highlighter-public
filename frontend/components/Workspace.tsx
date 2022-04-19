import React, { ReactNode } from "react"
import { StatementProps } from "./Statement"

// import styles from './Statement.module.css'

const StatementBox: React.FC<{sample: StatementProps[]}> = ( {sample} ) => {
 let content = sample["content"];
 let statementID = sample["statementID"];

 return (
 <div className='statement'>
  <div className='metadata'>ID: {statementID}</div>
  <div className='statebox' id='statebox' dangerouslySetInnerHTML={{__html: content}}/>
 </div>
)
}

export default StatementBox