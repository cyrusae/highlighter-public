import React, { FC } from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import NowBox from '../components/NowWrap'

export type NavInfoProps = {
 statementID: number;
 updatedAt: Date;
}
export type NavButtonProps = {
 action: 'next' | 'prev' | 'flag' | 'pause';
}

const NavButton: React.FC<{current: NavInfoProps, button: string}> = ({current, button}) => {
 const currentID = current.statementID;
 const act = button;
 //add:
 //&now=${lastUpdated}
 //to the url once date handling for Prisma in SQLite is fixed or I find a worthwhile workaround.
// const url = "'/" + act;

 return (
  <button onClick={() => {
   const now = Date.now();
   console.log('now:'); console.log(now); 
   Router.push('/go', `/go?act=${act}&current=${currentID}&now=${now}`)}}>{act}</button>
  )
}

export const Nav: React.FC<{current: NavInfoProps}> = ({current}) => {
 const next = 'next';
 const prev = 'prev';

 return (
  <div id='nav'>
   <NavButton current={current} button={prev} />
   <NavButton current={current} button={next} />
  </div>
 )
}

//const Next: React.FC<{current: NavButtonProps}> = ({current}) => {
// return (
//  <NavButton buttonText={'Next'} current={current}/>
// )
//}

//export const getServerSideProps: GetServerSideProps = async (context) => {
// const res = await fetch(`http://localhost:3001/next?current=${context.query.act}&now=${context.query.now}`);
// console.log("here's await fetch the next url output:");
// console.log(await res.clone().text());
// const result = await res.json();
// console.log("here is the result:"); console.log(result);
// return {
//  props: result
// }
//}