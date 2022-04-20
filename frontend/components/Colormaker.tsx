import React from 'react'
import Router from 'next/router'
import Map from './Remap'
import axios from 'axios'
import Glossary from './Glossary'

//NOTE: this doesn't work yet 

export type CodeProps = {
 shortCode: string;
 codeName: string | null;
 codeGloss: string | null;
 colorCode: string | null;
}

const Colormaker: React.FC<{}> = () => {
 const [ code, setCode ] = React.useState('');
 const [ name, setName ] = React.useState('');
 const [ gloss, setGloss ] = React.useState('');
 const [ color, setColor ] = React.useState('');
 const [ glossary, setGlossary ] = React.useState();

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submit button clicked!');
  axios.post('http://localhost:3001/newcode', {
   shortCode: code, 
   codeName: name, 
   codeGloss: gloss, 
   colorCode: color,
  });
  setCode('');
  setName('');
  setColor('');
  setGloss('');
 }

 return (
  <div id='codemaker'>
   <h2>Add a new code:</h2>
   <form name='colormaker' onSubmit={handleSubmit}>
    <label htmlFor='shortCode' title='This must be unique! Non-unique shortcodes will crash the server.'>Unique code (a-zA-Z, no spaces):
    </label>
    <input required type='text' id='shortCode' name='shortCode' title='This must be unique! Non-unique shortcodes will crash the server.' pattern="[A-Za-z0-9]+" value={code} onChange={(e) => setCode(e.target.value)}/><p>Note: non-unique codes <b>will</b> crash the server on submit. Refresh and check the most recent glossary if you're unsure.</p>
    <label htmlFor='codeName'>Short name: </label>
    <input type='text' id='codeName' name='codeName' value={name} onChange={(e) => setName(e.target.value)}/>
    <label htmlFor='codeGloss'>Description of code:</label>
    <textarea id='codeGloss' name='codeGloss' rows={2} cols={30} value={gloss} onChange={(e) => setGloss(e.target.value)}/>
    <label htmlFor='colorManual'>Color (for) code:</label>
    <button type='button' id='colorRandom' value={color} onClick={() => {
     const red = (Math.ceil(Math.random() * 65) + 190).toString(16);
     const blue = (Math.ceil(Math.random() * 65) + 190).toString(16);
     const green = (Math.ceil(Math.random() * 65) + 190).toString(16);
     const random = '#' + red + blue + green;
//     console.log("the generated random color:"); console.log(random); //troubleshooting tool
     setColor(random)}}>Random color</button><input type='text' id='colorManual' required value={color} onChange={(e) => setColor(e.target.value)}/> <input type='color' id='colorPicker' value={color} onChange={(e) => setColor(e.target.value)}/>  
    
    

    <div id='preview'>
     <p><mark className={code}><b>{name}</b> (<code>{code}</code>): <i>{gloss}</i></mark></p>
    <style jsx>{` mark.${code},.${code} * { 
      background-color: ${color} !important;
     }
    `}</style>
    </div>
    <button type='submit'>Submit</button>
   </form>
   <p><b><i>Refresh the page after submitting</i></b> in order to see an updated code list (recommended to avoid accidental duplicates).</p>
  </div>
 )
}

export default Colormaker