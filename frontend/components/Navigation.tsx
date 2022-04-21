import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { ReaderProps } from '../pages/s/[statementID]'
import { StatementProps } from './Statement'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Stack from 'react-bootstrap/Stack'


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
   <Button id='nextButton' type='button' className='button' onClick={() => {
					const now = Date.now();
    	axios.put('http://localhost:3001/leave/', { 
						currentID: current,
						now: now,
					});
     Router.push('/s/', `/s/${next}`)}}>
      {act}
   </Button>
  )} else if (act === 'prev') {
    return (
     <Button disabled id='prevButton' type='button' className='button' onClick={() => {
      axios.put('http://localhost:3001/leave/', { currentID: current });
      Router.push('/s/', `/s/${prev}`)}}>
       {act}
 		</Button>
 	)} else if (act === 'flag') {
   	return (
      <Button variant="danger" id='flagButton' type='button' className='button' onClick={() => {
       const now = Date.now();
  				 axios.put('http://localhost:3001/leave/', { 
								currentID: current,
								now: now,
							});
							}}>
							{act}
						</Button>
 	)} else {
				return (
   	 <Button 
     id='pauseButton' type='button' className='button' 
					onClick={() => {
						const now = Date.now();
    		axios.put('http://localhost:3001/leave/', { 
							currentID: current,
							now: now,
						});}}>
   	   {act}
  	  </Button>
  )
  }
}

export const Nav: React.FC<{current: ReaderProps}> = ({current}) => {

	const [ flagged, setFlagged ] = useState('');
	useEffect(() => {
		const bg = document.getElementById('flagS');
  let flags = localStorage.getItem('flag');
		bg.style.backgroundColor = '#53565A';
		if (flags !== null) {
			setFlagged(localStorage.getItem('flag'));
			bg.style.backgroundColor = '#610C04';
		}; 
  if (flags === null) {
			flags = '';
	  document.getElementById('flagButton').addEventListener('click', function flag() {
  	 if (flags.includes(current.toString()) === false) {
  	  const commentary = prompt('Why flag this?', '');
  	  flags += ('<li>' + current + ': ' + commentary + '</li>');
					return;
 	  };
 	  localStorage.setItem('flag', flags);
 	  setFlagged(localStorage.getItem('flag'));
				bg.style.backgroundColor = '#53565A';
 	 });
		}
 })
 return (
  <Stack gap={1} id='nav'>
   <NavButton from={current} act={'prev'} />
   <NavButton from={current} act={'pause'} />
   <NavButton from={current} act={'flag'} />
   <NavButton from={current} act={'next'} />
  </Stack>
 )
}

export const NavMini: React.FC<{current: number}> = ({current}) => {
	return (
		<div className='multinav'>
			<Button variant="outline-danger" id='flagButton' type='button' className='button' onClick={() => {
  		 axios.put('http://localhost:3001/leave/', { 
					currentID: current,
				});
			}}>
				flag
			</Button>
		</div>
	)
}