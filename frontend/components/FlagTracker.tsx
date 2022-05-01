import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

export const FlagBar: React.FC<{}> = () => {
 return (
  <div id='flagbar' />
 )
}

const FlagTracker: React.FC<{current: number}> = ({current}) => {
 console.log(current);
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