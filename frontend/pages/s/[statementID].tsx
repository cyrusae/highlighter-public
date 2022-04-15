import React from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { StatementProps } from '../../components/Statement'

async function update(statementID: number): Promise<void> {
 await fetch(`http://localhost:3001/upd8/${statementID}`, {
  method: 'PUT'
 })
 await Router.push('/upd8/')
}

async function encode(statementID: number, phrase: string, code: string): Promise<void> {
 await fetch(`http://localhost:3001/code/`)
}


//Working:
const Statement: React.FC<{statement: StatementProps}> = ({ statement, ...rest }) => {
 // console.log("Contents of 'rest':"); //troubleshooting tool
 // console.log(rest); //troubleshooting tool
 let content = statement.content;
 let statementID: number = statement.statementID;
 return (
  //TODO: make a layout for display (also, controls)
  <div className='statement'dangerouslySetInnerHTML={{__html: content}}/>
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