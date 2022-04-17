import Router from "next/router";
import React, { ReducerAction } from "react";
import { StatementProps } from "../components/Statement";


//need to understand how to send the data that's needed here
const sendUpdate = async (e: React.SyntheticEvent) => {
 e.preventDefault();
 try {
  //what do I need to send here?
  //want: updated contents, relation to encoding
  await fetch(`http://localhost:3001/upd8`, {
   method: 'PUT', //is this the right method for both uses?
   headers: {
    'Content-Type': 'application/json'
   },
  })
  await Router.push('/upd8')
 } catch (error) {
  console.error(error)
 }
}

const sendEncoding = async (e: React.SyntheticEvent) => {
 e.preventDefault()
 try {
  //what do I need to send here?
  //want: phrase being coded, code used, parent statement
  await fetch(`http://localhost:3001/code`, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json'
   }
  })
  await Router.push('/code')
 } catch (error) {
  console.error(error)
 }
}