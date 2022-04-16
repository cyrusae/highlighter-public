import React from 'react'
import Router from 'next/router'
import axios from 'axios'
import { ReaderProps } from '../pages/s/[statementID]'

export type NavButtonProps = {
 action: 'next' | 'prev' | 'flag' | 'pause';
	read: ReaderProps[];
}

const NavButton: React.FC<{from: ReaderProps; act: NavButtonProps["action"]}> = ({from, act}) => {
	console.log("received statementID as 'current' is:"); console.log(from.statement["statementID"]); 
	const current = from.statement["statementID"];
	console.log("next value is:"); console.log(from.nextID);
	const next = from.nextID;
	console.log("previous value is:"); console.log(from.prevID);
	const prev = from.prevID;
	console.log("received act value is:"); console.log(act);

 if (act === 'next') {
  return (
   <button type='button' className='button' onClick={() => {
    	axios.post('/leave', { currentID: current });
     Router.push('/s', `/s/${next}`)}}>
      {act}
   </button>
  )} else if (act === 'prev') {
    return (
     <button type='button' className='button' onClick={() => {
      axios.put('/leave', { currentID: current });
      Router.push('/s', `/s/${prev}`)}}>
       {act}
 		</button>
 	)} else if (act === 'flag') {
   	const newFlag = current + ' ' + `&#013; &#010;`; //last part should produce line breaks
   	return (
      <button type='button' className='button' onClick={() => {
       if (document.getElementById('flags').innerText.includes(current) === false)
      		{ 
         axios.put('/leave', { currentID: current });
         document.getElementById('flags').innerHTML += newFlag 
        }}}>
							{act}
						</button>
 	)} else {
				return (
   	 <button type='button' className='button' 
					onClick={() => {
						axios.put('/leave', { currentID: current });}}>
   	   {act}
  	  </button>
  )
  }
}

export const Nav: React.FC<{current: ReaderProps}> = ({current}) => {
	const here = parseInt(current.statement["statementID"].toString(), 10)
	console.log('Nav attempts to log current statementID here:'); console.log(here);
 return (
  <div id='nav'>
   <NavButton from={current} act={'prev'} />
   <NavButton from={current} act={'pause'} />
   <NavButton from={current} act={'flag'} />
   <NavButton from={current} act={'next'} />
  </div>
 )
}