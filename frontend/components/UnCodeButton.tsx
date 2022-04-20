import React, { useEffect } from 'react'
import axios from 'axios'

const UnCodeButton: React.FC<{current: number}> = ({ current }) => {
 useEffect(() => {
  const button = document.getElementById('unCodeButton');
  button.addEventListener('onclick', () => {
   const encoded = document.getSelection().anchorNode.parentElement;
   const phrase = encoded.innerText;
   encoded.replaceWith(phrase);
   let html = document.getElementById('statebox').innerHTML;
   axios.put('http://localhost:3001/uncode/', {
    currentID: current,
    phrase: phrase,
    unnot8: html
   })
  })
 })
 return (
  <button id='unCodeButton'>Uncode</button>
 )
}

export default UnCodeButton 