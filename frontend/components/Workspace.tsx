import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card'
import { CodeList } from "./Glossary";
import { StatementProps } from "./Statement"
import { Button } from "react-bootstrap";

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
 if (start !== pOpen && stop !== pClos) {
  let paragraphs = pOpen + content + pClos;
  paragraphs.replaceAll((p1azy || pLa2y), (pClos + pOpen))
  content = paragraphs;
 }
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
  <Card>
   <Card.Header>
    ID: {statementID}
   </Card.Header>
   <Card.Body>
    <div id='statement' className="statext" dangerouslySetInnerHTML={{__html: content}}/>
   </Card.Body>
   <Card.Footer>
   <Button variant={button} size='sm' id={`f${statementID}`} className='flagCard flagButton button' onMouseLeave={() => checkStatus()}>{ (button === 'danger') ? 'flagged' : 'flag'}</Button>
   </Card.Footer>
  </Card>
)
}

export default StatementBox
