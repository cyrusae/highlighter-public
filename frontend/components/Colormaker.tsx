import React from 'react'
import Router from 'next/router'

//NOTE: this doesn't work yet 

export type CodeProps = {
 short: string;
 name: string | null;
 gloss: string | null;
 color: string | 'none';
}

//TO DO: rewrite: those props would be being passed from the form to things using the form, letting me break this up into components I find more pleasing.

const PreviewCode: React.FC<{code: CodeProps}> = ({ code }) => {
 const name = `<b>${code.name}</b> `;
 const short = `(<code>${code.short}</code>)`;
 const gloss = ` = <i>${code.gloss}</i>`

 const output = `<span style="background-color: ${code.color}">` + name + short + gloss + '</span>'

 return (
  <div id='preview' dangerouslySetInnerHTML={{__html: output}}/>
 )
}

//take a nap and then figure out how to integrate that ideally later.


const Colormaker: React.FC<{code: CodeProps}> = ({ code }) => {

 return (
  <div>
   <form name='colormaker'>
    <input type='text' id='shortCode' name='shortCode' required></input>
    <input type='text' id='codeName' name='codeName'></input>
    <textarea id='codeGloss' name='codeGloss' rows={2} cols={30}/>

    <button id='wysiwyg' onClick={() => {
     const manual = document.getElementById('colorManual')
     const visual = document.getElementById('colorPicker')
     if (visual.style.display === 'none') {
      visual.style.display = 'block';
      manual.style.display = 'none';
     } else {
      visual.style.display = 'none';
      manual.style.display = 'block';
     }
    }}>Switch color selection method</button>
    
    <input type='text' id='colorManual'></input>
    <input type='color' id='colorPicker'></input>
    <div id='preview'>
     {() => {
      const short = document.getElementById('shortCode')
      const name = document.getElementById('codeName')
      const gloss = document.getElementById('codeGloss')
      const manual = document.getElementById('colorManual')
      const visual = document.getElementById('colorPicker')

      short.addEventListener
     }}
    </div>
    <input type='submit'>Submit</input>
   </form>
   <button id='mapmaker'>
    Regenerate Sass map
   </button>
   <div id='sassmap'></div>
  </div>
 )
}