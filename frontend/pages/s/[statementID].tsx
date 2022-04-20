import React from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { StatementProps } from '../../components/Statement'
import { Nav } from '../../components/Navigation'
import Glossary, { CodeList } from '../../components/Glossary'
import CodeDropdown from '../../components/CodePicker'
import StatementBox from '../../components/Workspace'
import FlagTracker from '../../components/FlagTracker'

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
 let content = sample["content"];
// console.log("statementID attempts to log the statement content:"); console.log(content);
 let next = statement.nextID;
// console.log("statementID attempts to log next ID"); console.log(next);
 let prev = statement.prevID;
// console.log("statementID attempts to log the previous ID"); console.log(prev);

 return (
  <div id='reader'>
    <div id='center'>
     <StatementBox sample={sample} />
	  	<Glossary glossary={glossary} />    </div>
		<div id='coder'>
      <CodeDropdown current={statementID} glossary={glossary} />
     <FlagTracker current={statementID}/>

    </div>
    <Nav current={statement} />
  </div>
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