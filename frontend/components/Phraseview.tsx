import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CodeList } from './Glossary'

const Phraseview: React.FC<{code: string}> = ({ code }) => {
 const [ preview, setPreview ] = useState('')
 const [ codePick, setCodePick ] = useState('');
 //cases this needs to cover:
 // - it is empty
 // - it contains uncoded text
 // - it contains already-coded text that the user wants to recode
 // - the dropdown is null
 useEffect(() => {
  const statement = document.getElementById('statebox');
  const dropdown = document.getElementById('code-select');
  dropdown.onchange = () => {
   setCodePick(code)
  }
  statement.onselectionchange = () => {
   const selection = document.getSelection().anchorNode.parentElement;
   if (selection.tagName === 'mark') {
    let phrase = selection.innerText;
    const codeD = selection.className;
    setPreview('<mark class="' + codeD + '">' + phrase + '</mark>');
    dropdown.addEventListener('onchange', () => {
     setCodePick(code);
     if (codePick === null) {
      setPreview(phrase)
     } else if (codePick != codeD) {
      setPreview('<mark class="' + codePick + '">' + phrase + '</mark>');
     }
    })
   } else {
    const highlight = document.getSelection().toString();
    setCodePick(code);
    if (codePick === null) {
     setPreview(highlight);
    } else {
     setPreview('<mark class="' + codePick + '">' + highlight + '</mark>')
    }
   }
  }
 })

 return (
  <div id='phraseview'>
   <div id='phraseviewing' dangerouslySetInnerHTML={{__html: preview}}/>
  </div>
 )
}

export default Phraseview