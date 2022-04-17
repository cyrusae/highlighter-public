import React from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { StatementProps } from '../../components/Statement'
import { Nav } from '../../components/Navigation'

async function update(statementID: number): Promise<void> {
 await fetch(`http://localhost:3001/upd8/${statementID}`, {
  method: 'PUT'
 })
 await Router.push('/upd8/')
}

async function encode(statementID: number, phrase: string, code: string): Promise<void> {
 await fetch(`http://localhost:3001/code/`)
}

export type ReaderProps = {
  statement: StatementProps[];
  nextID: number | null;
  prevID: number | null;
}

const Statement: React.FC<{statement: ReaderProps}> = ({statement}) => {
 // console.log("Contents of 'rest':"); console.log(rest); //troubleshooting tool
 let statementID: number = statement.statement["statementID"];
 console.log('statementID attempts to log the current ID:'); console.log(statementID);
 let content = statement.statement["content"];
 console.log("statementID attempts to log the statement content:"); console.log(content);
 let next = statement.nextID;
 console.log("statementID attempts to log next ID"); console.log(next);
 let prev = statement.prevID;
 console.log("statementID attempts to log the previous ID"); console.log(prev);

 return (
  //TODO: make a layout for display (also, controls)
  <div>
    <div className='metadata'>ID: {statementID}</div>
    <div className='statement' id='statebox' dangerouslySetInnerHTML={{__html: content}}/>
    <Nav current={statement} />
  </div>
 )
}

export default Statement

//QUESTION: Would it be too cheeky to integrate the controls into this page instead of a different component and use that to encode the ID on the control firing?
//Actually that's probably the right way to do it
//nvm it can receive props better on its own I think? Unsure. Example at p/ doesn't help much.

export const getServerSideProps: GetServerSideProps = async (context) =>  {
//  try {
    const res = await fetch(`http://localhost:3001/statement/${context.params.statementID}`) 
  console.log("here's await res clone text output:");
 console.log(await res.clone().text()) 
 const statement = await res.json()
 console.log("here is the statement:")
 console.log(statement)
// catch (e) {console.log(e)} //where can this go to not break things?
  return {
  props: 
   { statement }
 };
}  
//}