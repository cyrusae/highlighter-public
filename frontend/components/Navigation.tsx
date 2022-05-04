import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { ReaderProps } from '../pages/s/[statementID]'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Container, Row, Col, ButtonGroup, ToggleButtonGroup } from 'react-bootstrap'
import { GiForwardSun, GiPauseButton } from 'react-icons/gi'

export type NavButtonProps = {
 action: 'next' | 'prev' | 'flag' | 'pause';
	read: ReaderProps[];
}

export const NavNap: React.FC<{from: ReaderProps}> = ({ from }) => {
	const currentID = from.statement["statementID"];
	return (
		<div id='sparebtns'>
			<div className='btnspace'>	
			<div id='psace'><Button aria-label='save session' id='puase' variant='outline-info' className='ms-auto flipper' onClick={() => {
					axios.put('http://localhost:3001/leave/', { currentID: currentID })
				} }>
					<GiPauseButton />
				</Button></div>
				</div>
			</div>
	)
}

export const NavTogl: React.FC<{from: ReaderProps}> = ({ from }) => {
	const currentID = from.statement["statementID"];
	const next = from.nextID;
	const prev = from.prevID;

	return (
		<ButtonGroup id='flippers' className='btn-group btn-block flipper' aria-label='navigation buttons' role="group">
		<Button id='prevButton' type='button' size='lg' aria-label='previous statement' variant='outline-primary' className='btn button' onClick={() => {
					const now = Date.now();
    	axios.put('http://localhost:3001/leave/',	{
						currentID: currentID,
						now: now,
					});
     Router.push('/s/', `/s/${prev}`)}}>
						<GiForwardSun />
			</Button>
			<Button id='nextButton' type='button' size='lg' aria-label='next statement' variant='primary' className='btn button' onClick={() => {
					const now = Date.now();
    	axios.put('http://localhost:3001/leave/',	{
						currentID: currentID,
						now: now,
					});
     Router.push('/s/', `/s/${next}`)}}>
						<GiForwardSun />
			</Button>
		</ButtonGroup>
	)
}

export const NavFoot: React.FC<{from: ReaderProps}> = ({ from }) => {
	const currentID = from.statement["statementID"];
	return (
		<Stack id='flippers' className='navFoot'>
			<NavTogl from={from} />
		</Stack>
	)
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
   <Button size='lg' id='nextButton' type='button' className='button' onClick={() => {
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
     <Button size='lg' id='prevButton' type='button' className='button' onClick={() => {
      axios.put('http://localhost:3001/leave/', { currentID: current });
      Router.push('/s/', `/s/${prev}`)}}>
       {act}
 		</Button>
 	)} else if (act === 'flag') {
   	return (
      <Button size='sm' disabled variant="danger" id='flagButton' type='button' className='button' onClick={() => {
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
   	 <Button size='sm'
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
//		bg.style.backgroundColor = '#53565A';
		if (flags !== null) {
			setFlagged(localStorage.getItem('flag'));
//			bg.style.backgroundColor = '#610C04';
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
			<NavButton from={current} act={'pause'} /><NavButton from={current} act={'flag'} />
   <NavButton from={current} act={'next'} />
  </Stack>
 )
}

export const NavMini: React.FC<{current: number}> = ({current}) => {
	const thisOne = current.toString();
	return (
		<div className='multinav'>
			<Button variant="outline-danger" id={thisOne} type='button' className='flagButton button' onClick={() => {
  		 axios.put('http://localhost:3001/leave/', { 
					currentID: current,
				});
			}}>
				flag
			</Button>
		</div>
	)
}