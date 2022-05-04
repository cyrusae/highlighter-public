import React, { useEffect } from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { StatementProps } from '../../components/Statement'
import { Nav } from '../../components/Navigation'
import Glossary, { FootBook, CodeList } from '../../components/Glossary'
import CodeDropdown from '../../components/CodePicker'
import StatementBox from '../../components/Workspace'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import Singleview from '../../components/Singleview'
import { NavFoot, NavTogl, NavNap } from '../../components/Navigation'
import WorkFoot from '../../components/WorkFooter'
import { Flagging } from "../../components/FlagTracker";


export type ReaderProps = {
  statement: StatementProps[];
  nextID: number | null;
  prevID: number | null;
}

const Statement: React.FC<{statement: ReaderProps, glossary: CodeList[]}> = ({statement, glossary}) => {
 // console.log("Contents of 'rest':"); console.log(rest); //troubleshooting tool
 let sample = statement.statement;
 let statementID: number = sample["statementID"];
// console.log('statementID attempts to log the current ID:'); console.log(statementID);
// let content = sample["content"]; console.log("statementID attempts to log the statement content:"); console.log(content);
// let next = statement.nextID; console.log("statementID attempts to log next ID"); console.log(next);
// let prev = statement.prevID; console.log("statementID attempts to log the previous ID"); console.log(prev);

 useEffect(() => {
  const statement = document.getElementById('statement');
//  const phrases = statement.getElementsByTagName('mark');
  for (let i = 0; i < glossary.length; i++) {
   const coded = statement.getElementsByClassName(glossary[i].shortCode);
   const name = glossary[i].codeName;
   for (let i = 0; i < coded.length; i++) {
    let phrase = coded[i];
    let words = phrase.innerHTML;
    let tooltip = '<span class="toltip">' + name + `\u{202F}` + '</span>';
    phrase.addEventListener('pointerenter', () => {
     phrase.innerHTML += tooltip;
    });
    phrase.addEventListener('pointerleave', () => {
     phrase.innerHTML = words;
    });
   }
  }
 })

 return (
  <Singleview>
    <Flagging />
   <Col md={8} className='barmain'>
   <StatementBox sample={sample} glossary={glossary} />
   <NavNap from={statement}/>
   </Col>
   <Col className='barside'>
    <Stack>
     <Row className='coder'>
     <CodeDropdown current={statementID} glossary={glossary} />
    </Row>
    <Row>
    </Row>
    </Stack>
    <div></div>
     <NavTogl from={statement} />
   </Col>
   <FootBook glossary={glossary} />
  </Singleview>
 )
}

export default Statement

export const getServerSideProps: GetServerSideProps = async (context) =>  {
//  try {
	const [stateRes, glossRes] = await Promise.all([
		fetch(`http://localhost:3001/statement/${context.params.statementID}`),
		fetch(`http://localhost:3001/gloss`)]) 
// console.log("here's await res clone text output for stateRes:"); console.log(await stateRes.clone().text()) 
//	console.log("here's await res clone text output for glossRes:"); console.log(await stateRes.clone().text()) 
 const [statement, glossary] = await Promise.all([stateRes.json(), glossRes.json()])
//	console.log("here is the statement:"); console.log(statement); 
// console.log("here is the glossary:"); console.log(glossary)
  return {
  props: 
   { statement, glossary }
 };
}  
//}