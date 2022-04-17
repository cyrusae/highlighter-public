import React, { ReactNode } from "react"
import { StatementProps } from "./Statement"

const StatementBox: React.FC<{sample: StatementProps[], css: string}> = ( {sample, css} ) => {
 let content = sample["content"];
 let statementID = sample["statementID"];

 return (
 <><div className='statement'><div className='metadata'>ID: {statementID}</div>
  <div className='statement' id='statebox' dangerouslySetInnerHTML={{__html: content}}/><style jsx>{`${css}`}</style>
 </div></>
)
}

export default StatementBox