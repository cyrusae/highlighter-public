import React, { ReactNode, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import { CodeList } from "./Glossary";
import { StatementProps } from "./Statement"

// import styles from './Statement.module.css'

const StatementBox: React.FC<{sample: StatementProps[], glossary: CodeList[]}> = ( {sample, glossary} ) => {
 let content = sample["content"].trim();
 let statementID = sample["statementID"];
 const pOpen = `<p>`
 const pClos = `</p>`
 const p1azy = `<p/>`
 const pLa2y = `<p />`
 const start = content.slice(0, (pOpen.length - 1));
 const stop = content.slice((content.length - pClos.length - 1), (content.length - 1));
 if (start != pOpen && stop != pClos) {
  let paragraphs = pOpen + content + pClos;
  paragraphs.replaceAll((p1azy || pLa2y), (pClos + pOpen))
  content = paragraphs;
 }

 return (
  <Card>
   <Card.Header>
    ID: {statementID}
   </Card.Header>
   <Card.Body>
    <div id='statement' className="statext" dangerouslySetInnerHTML={{__html: content}}/>
   </Card.Body>
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