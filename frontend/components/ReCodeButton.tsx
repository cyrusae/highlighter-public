import React, { useEffect } from 'react';
import axios from 'axios';
import { CodeList } from './Glossary';
import Button from 'react-bootstrap/Button'

const ReCodeButton: React.FC<{code: string, current: number, glossary: CodeList[]}> = ({ code, current, glossary }) => {
 useEffect(() => {
  const button = document.getElementById('reCodeButton');
  const statement = document.getElementById('statebox');
  button.addEventListener('onclick', () => {
   const encoded = document.getSelection().anchorNode.parentElement;
   const oldCode = encoded.className;
   const phrase = encoded.innerText;
   encoded.className = code;
   let html = statement.innerHTML;
   let plaintext = statement.innerText;
   axios.put('http://localhost:3001/recode/', {
    currentID: current,
    annot8: html,
    plain: plaintext,
    phrase: phrase,
    codeUsed: code,
    oldCode: oldCode
   })
  })
 });
 return (
  <Button size="sm" variant='outline-warning' id='reCodeButton' className='ms-auto codebutton recode' disabled>Recode</Button>
 )
}

export default ReCodeButton