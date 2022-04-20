import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FlagTracker: React.FC<{current: number}> = ({current}) => {
 console.log(current);
 const [ flagged, setFlagged ] = useState('')

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

 return (
  <div className='flagtracker'>
   <details>
    <summary>Statements flagged this session:</summary>
    <div id='flags'>
     <ul dangerouslySetInnerHTML={{__html: flagged}}></ul>
    </div>
    <button type='button' onClick={() => axios.post('http://localhost:3001/saveflags', {
     content: flagged,
     type: 'flags'
    })}>
     Save flags
    </button>
    <button type='button' onClick={() => navigator.clipboard.writeText(flagged)}>
     Copy flags
    </button>
    <button type='button' onClick={() => {localStorage.clear(); setFlagged('')}}>
     Clear flags
    </button>
   </details>
  </div>
 )
}

export default FlagTracker 