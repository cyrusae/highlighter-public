import React, { FC } from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import NowBox from '../components/NowWrap'

export type NavInfoProps = {
 statementID: number;
}

export type NavButtonProps = {
 action: 'next' | 'prev' | 'flag' | 'pause';
}

const NavButton: React.FC<{current: NavInfoProps, act: NavButtonProps["action"]}> = ({current, act}) => {
 const currentID = current.statementID;
 //add:
 //&now=${lastUpdated}
 //to the url once date handling for Prisma in SQLite is fixed or I find a worthwhile workaround.
// const url = "'/" + act;

 return (
  <div aria-role='button' className='button' onClick={() => {
   Router.push('/go', `/go?act=${act}&current=${currentID}`)}}>
     {act}
  </div>
  )
}

const FlagButton: React.FC<{current: NavInfoProps, act: NavButtonProps["action"]}> = ({current, act}) => {
  const newFlag = current.statementID + ' ' + `&#013; &#010;`; //last part should produce line breaks

  //changed from button to div to avoid automatic onsubmit events in case that would be a risk
  return (
    <div aria-role='button' className='button' onClick={() => {
      if (document.getElementById('flags').innerText.includes(current.statementID.toString()) === false)
        { document.getElementById('flags').innerHTML += newFlag }
    }}>{act}</div>
  )
}

const PauseButton: React.FC<{current: NavInfoProps, act: NavButtonProps["action"]}> = ({current, act}) => {
  const currentID = current.statementID;
  //TODO: add save on click 
  //TODO: determine how best to handle saving
  //NOTE: may end up being cookies
  return (
    <div aria-role='button' className='button'>
      {act}
    </div>
  )
}

export const Nav: React.FC<{current: NavInfoProps}> = ({current}) => {
 return (
  <div id='nav'>
   <NavButton current={current} act={'prev'} />
   <PauseButton current={current} act={'pause'} />
   <FlagButton current={current} act={'flag'} />
   <NavButton current={current} act={'next'} />
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