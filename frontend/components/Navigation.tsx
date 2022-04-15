import React, { FC } from 'react'
import Router from 'next/router'

export type NavInfoProps = {
 statementID: number;
 updatedAt: Date;
}
export type NavButtonProps = {
 action: 'next' | 'prev' | 'flag' | 'pause';
}

const NavButton: React.FC<{current: NavInfoProps, button: string}> = ({current, button}) => {
 const currentID = current.statementID;
 const lastUpdated = current.updatedAt;
 const act = button;

 return (
  <button onClick={() => Router.push('/next', `/${act}?${currentID},${lastUpdated}`)}>{act}</button>
  )
}

export const Nav: React.FC<{current: NavInfoProps}> = ({current}) => {
 const next = 'next';
 const prev = 'prev';

 return (
  <div>
   <NavButton current={current} button={prev}/>
   <NavButton current={current} button={next}/>
  </div>
 )
}

//const Next: React.FC<{current: NavButtonProps}> = ({current}) => {
// return (
//  <NavButton buttonText={'Next'} current={current}/>
// )
//}

