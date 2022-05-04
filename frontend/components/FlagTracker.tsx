import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { GiFlyingFlag } from 'react-icons/gi'

export const Flagging: React.FC<{}> = () => {
 const [ show, setShow ] = useState(false);
// const [ flagged, setFlagged ] = useState('');
 const [ button, setButton ] = useState('outline-danger');
 const handleClose = () => {
  setShow(false);
 };
 const handleOpen = () => setShow(true);
 let flagged = '';

 function colorFlag(flags) {
  if (typeof document !== undefined) {
   if (!(!flags) && flags !== '') {
    setButton('danger');
   } else {
    setButton('outline-danger')
   }
  }
 }
 function checkFlags(flags) {
  if (flags !== null && flags !== undefined) {
   colorFlag(flags);
   if (flags.length > flagged.length) flagged = flags;
  }
 }
 function addFlags(flags, instance: string) {
  const now = new Date(Date.now())
  flagged = (flags === null ? '' : flags) + `<li id='${instance}'>${instance} was flagged at ` + now.toTimeString() + `</li>`;
  localStorage.setItem('flag', flagged);
 }

 function makeComment(current: string) {
  const comment = prompt('Why flag this?', 'answer here');
  return comment;
 }

 useEffect(() => {
//  colorFlag();
  if (typeof document !== undefined) {
   let flags = localStorage.getItem('flag');
   const buttons = document.querySelectorAll('.flagButton.flagCard:not(.viewOne)');
//   checkFlags(flagged);
   buttons.forEach(button => {
  //  console.log(`trying ${button.id} now`);
    const gotOne = button.id.replace('f', '');
    button.addEventListener('click', () => {
 //    console.log('before comentary');
 //    const comment = () => {
 //     const reply = prompt('Why flag this?', 'enter comment');
 ///     return reply;
 //    }
 //    const commentary = comment.toString();
 //    console.log('after comentary');
     addFlags(flags, gotOne);
 //    console.log(`clicking ${gotOne}`);
     flagged = flags;
     colorFlag(flags);
     return flagged;
    })
   })
   if (show === true) {
    document.getElementById('flagstuff').innerHTML = flagged;
   }
   colorFlag(flags);
  }
 })


 return (
  <>
   <Button id='flagShower' variant={button} aria-label='Show flags' size='sm' onClick={handleOpen}><GiFlyingFlag /></Button>

  <Offcanvas backdropClassName='shooshThis' show={show} onHide={handleClose} onShow={() => {
   let flags = localStorage.getItem('flag');
   let destination = document.getElementById('flagstuff');
   flagged = flags;
   destination.innerHTML = flagged;
  }}>
   <Offcanvas.Header closeButton>
    <Offcanvas.Title>
     Flags this session:
    </Offcanvas.Title>
   </Offcanvas.Header>
   <Offcanvas.Body>
    <ul id="flagstuff">{flagged}</ul>
   <Stack direction='horizontal' id='flagstack' gap={2}>
    <Button size="sm"  type='button' onClick={() => axios.post('http://localhost:3001/saveflags', {
     content: flagged,
     type: 'flags'
     })}>
     Save
     </Button>
    <Button size="sm" type='button' onClick={() => navigator.clipboard.writeText(flagged)}>
     Copy
    </Button>
    <Button size="sm" type='button' onClick={() => {localStorage.clear(); flagged=''; document.getElementById('flagstuff').innerHTML = flagged; setButton('outline-danger')}}>
     Clear
    </Button>
   </Stack>
   </Offcanvas.Body>
  </Offcanvas>
  </>
 )
}

export const FlagBar: React.FC<{}> = () => {
 return (
  <div id='flagbar' />
 )
}

const FlagTracker: React.FC<{current: number}> = ({current}) => {
// console.log(current);
 const [ flagged, setFlagged ] = useState('')

 // fix letting this track where it's heading:
 useEffect(() => {
  let flags = localStorage.getItem('flag');
  if (flags !== null) setFlagged(localStorage.getItem('flag')); 
  if (flags === null) flags = '';
  document.getElementById('flagButton').addEventListener('click', function flag() {
   if (flags.includes(current.toString()) === false) {
    const commentary = prompt('Why flag this?', '');
    flags += ('<li>' + current + ': ' + commentary + '</li>');
   };
   localStorage.setItem('flag', flags);
   setFlagged(localStorage.getItem('flag'));
  });
 })

 //this isn't working both ways yet:
 useEffect(() => {
  const bar = document.getElementById('flagbar')
  if (localStorage.getItem('flag') === null) {
   bar.style.backgroundColor = "#53565A";
  } else {
   bar.style.backgroundColor = "#610C04"
  }
 })

 return (
  <div className='flagtracker'>
   <details>
    <summary>Statements flagged this session:</summary>
    <div id='flags'>
     <ul dangerouslySetInnerHTML={{__html: flagged}}></ul>
    </div>
    <Button size="sm" type='button' onClick={() => axios.post('http://localhost:3001/saveflags', {
     content: flagged,
     type: 'flags'
    })}>
     Save flags
    </Button>
    <Button size="sm" type='button' onClick={() => navigator.clipboard.writeText(flagged)}>
     Copy flags
    </Button>
    <Button size="sm" type='button' onClick={() => {localStorage.clear(); setFlagged('')}}>
     Clear flags
    </Button>
   </details>
  </div>
 )
}

export default FlagTracker 