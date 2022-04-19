import React, { PureComponent } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { ReaderProps } from '../pages/s/[statementID]'
import { StatementProps } from './Statement'

export type NavButtonProps = {
 action: 'next' | 'prev' | 'flag' | 'pause';
	read: ReaderProps[];
}

const NavButton: React.FC<{from: ReaderProps; act: NavButtonProps["action"]}> = ({from, act}) => {
//	console.log("received statementID as 'current' is:"); console.log(from.statement["statementID"]); 
	const current = from.statement["statementID"];
//	console.log("next value is:"); console.log(from.nextID);
	const next = from.nextID;
//	console.log("previous value is:"); console.log(from.prevID);
	const prev = from.prevID;
//	console.log("received act value is:"); console.log(act);

 if (act === 'next') {
  return (
   <button id='nextButton' type='button' className='button' onClick={() => {
					const now = Date.now();
    	axios.put('http://localhost:3001/leave/', { 
						currentID: current,
						now: now,
					});
     Router.push('/s/', `/s/${next}`)}}>
      {act}
   </button>
  )} else if (act === 'prev') {
    return (
     <button id='prevButton' type='button' className='button' onClick={() => {
      axios.put('http://localhost:3001/leave/', { currentID: current });
      Router.push('/s/', `/s/${prev}`)}}>
       {act}
 		</button>
 	)} else if (act === 'flag') {
   	return (
      <button id='flagButton' type='button' className='button' onClick={() => {
       const now = Date.now();
  				 axios.put('http://localhost:3001/leave/', { 
								currentID: current,
								now: now,
							});
							}}>
							{act}
						</button>
 	)} else {
				return (
   	 <button 
     id='pauseButton' type='button' className='button' 
					onClick={() => {
						const now = Date.now();
    		axios.put('http://localhost:3001/leave/', { 
							currentID: current,
							now: now,
						});}}>
   	   {act}
  	  </button>
  )
  }
}

export const Nav: React.FC<{current: ReaderProps}> = ({current}) => {
 return (
  <div id='nav'>
   <NavButton from={current} act={'prev'} />
   <NavButton from={current} act={'pause'} />
   <NavButton from={current} act={'flag'} />
   <NavButton from={current} act={'next'} />
  </div>
 )
}

export const NavMini: React.FC<{current: number}> = ({current}) => {
	return (
		<div className='multinav'>
			<button id='flagButton' type='button' className='button' onClick={() => {
  		 axios.put('http://localhost:3001/leave/', { 
					currentID: current,
				});
			}}>
				flag
			</button>
		</div>
	)
}