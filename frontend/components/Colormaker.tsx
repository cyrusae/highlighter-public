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
    <label htmlFor='shortCode'>Unique code (a-zA-Z, no spaces):</label>
    <input required type='text' id='shortCode' name='shortCode' onChange={() => {}}></input>
    <label htmlFor='codeName'>Short name:</label>
    <input type='text' id='codeName' name='codeName'></input>
    <label htmlFor='codeGloss'>Description of code:</label>
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
    <label htmlFor='colorManual'>Color (for) code:</label>
    <input type='text' id='colorManual'></input>
    <input type='color' id='colorPicker'></input>
    <div id='preview'>
     <PreviewCode code={code}/>
    </div>
    <input type='submit'>Submit</input>
   </form>
   <button id='mapmaker' onClick={() => {
    //add call to the remapping function
   }}>
    Regenerate Sass map
   </button>
   <div id='sassmap'></div>
  </div>
 )
}