import React from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { StatementProps } from '../../components/Statement'

//This isn't working yet

async function update(statementID: number): Promise<void> {
 await fetch(`http://localhost:3001/upd8/${statementID}`, {
  method: 'PUT'
 })
 await Router.push('/upd8/')
}

async function encode(statementID: number, phrase: string, code: string): Promise<void> {
 await fetch(`http://localhost:3001/code/`)
}



const Statement: React.FC<{statement: StatementProps}> = ({ statement }) => {
 let content = statement.content;
 let statementID: number = statement.statementID;
// if (!props.coded) {
//  props.coded = true;
// }
// let statementIDforDiv = '"' + statement.statementID + '"';

// TODO: Add ability to fetch other factors (metadata) when those are added to schema.prisma

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
 console.log(await res.clone().text()) 
 const pile = await res.json()
// catch (e) {console.log(e)} //where can this go to not break things?
  return {
  props: 
   { pile }
 };
}  
//}