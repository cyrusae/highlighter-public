import React from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { StatementProps } from '../../components/Statement'

export const getServerSideProps: GetServerSideProps = async () => {
 const res = await fetch('http://localhost:3001/')
 const statement = await res.json()
 return {
  props: { statement }
 }
}

async function update(statementID: number): Promise<void> {
 await fetch(`http://localhost:3001/upd8/${statementID}`, {
  method: 'PUT'
 })
 await Router.push('/')
}

async function encode(statementID: number, phrase: string, code: string): Promise<void> {
 await fetch(`http://localhost:3001/code/`)
}

const Statement: React.FC<StatementProps> = props => {
 let content = props.content;
 if (!props.coded) {
  props.coded = true;
 }
 let statementID = props.statementID;

// TODO: Add ability to fetch other factors (metadata) when those are added to schema.prisma

 return (
  //TODO: make a layout for display (also, controls)
  <div id='`${statementID}`' className='statement'>
   {content}
  </div>
 )
}

//QUESTION: Would it be too cheeky to integrate the controls into this page instead of a different component and use that to encode the ID on the control firing?
//Actually that's probably the right way to do it