import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { CodeProps } from './Colormaker'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { ReaderProps } from '../pages/s/[statementID]'
import { GiSecretBook, GiSpellBook } from 'react-icons/gi'
import { IconType } from 'react-icons'

const book = GiSpellBook

export type CodeList = {
 shortCode: string;
 codeName: string | null;
 codeGloss: string | null;
 colorCode: string | null;
}

export const FootBook: React.FC<{glossary: CodeProps[]}> = ({ glossary }) => {
 const [ footer, setFooter ] = useState(Boolean);
 let css: string = '';
  for (let i = 0; i < glossary.length; i++) {
    const str = 'mark.' + glossary[i].shortCode + ' { background-color: ' + glossary[i].colorCode + '; } ';
    css += str;
  }
 
 useEffect(() => {
  const flippers = document.getElementById('flippers');
  const flossary = document.getElementById('glossary');
  const glable = document.getElementById('glable');
  const openbook = document.getElementById('codebook');
  const pause = document.getElementById('puase');
  const enclosure = document.getElementById('sparebtns')
  if (footer === false) {
   flossary.style.height = "0";
   flossary.style.overflowY = "hidden";
   glable.style.height = "0"
   glable.style.display = "none";
   openbook.style.bottom = "0.5vh";
   flippers.style.bottom = "0.5vh";
   enclosure.style.bottom = "0.5vh";
//   flippers.style.top = "50.5vh";
   pause.style.bottom = "0.5vh"
  } else {
   glable.style.display = "inline-block";
   flossary.style.overflowY = "scroll";
   glable.style.height = "30vh";
   flossary.style.height = "30vh";
   openbook.style.bottom = "30.5vh";
   pause.style.bottom = "30.5vh";
   flippers.style.bottom = "30.5vh";
 //  flippers.style.top = "29.5vh"
//   enclosure.style.bottom = "30.5vh"
  }
  const button = document.getElementById('codebook');
  button.addEventListener('onclick', () => {
   if (footer === true) { setFooter(false) } else { setFooter(true) }
  })
 }) 
 return (
  <div id="glossary" className="feet">
   <Button variant="outline-secondary" id='codebook' aria-label='Show codebook' onClick={(() => {
    if (footer === true) { setFooter(false) } else { setFooter(true) }
   })}><GiSpellBook/></Button>
   <Table id="glable" size="sm" striped bordered hover>
    <thead>
     <tr>
      <th scope='col'>Code</th>
      <th scope='col'>Name</th>
      <th scope='col'>Gloss</th>
     </tr>
    </thead>
    <tbody>
     {glossary?.map(code => 
      <tr key={code.shortCode}>
       <td>
        <mark className={code.shortCode}><b>{code.shortCode}</b></mark>
       </td>
       <td>
        <mark className={code.shortCode}>{code.codeName}</mark>
       </td>
       <td>
        {code.codeGloss}
       </td>
      </tr>
     )}
    </tbody>
   </Table>
  </div>
 )
}

export const FootlessBook: React.FC<{glossary: CodeProps[]}> = ({ glossary }) => {
 const [ footer, setFooter ] = useState(Boolean);
 let css: string = '';
  for (let i = 0; i < glossary.length; i++) {
    const str = 'mark.' + glossary[i].shortCode + ' { background-color: ' + glossary[i].colorCode + '; } ';
    css += str;
  }
 
 useEffect(() => {
  const flossary = document.getElementById('glossary');
  const glable = document.getElementById('glable');
  const openbook = document.getElementById('codebook');
  if (footer === false) {
   flossary.style.height = "0";
   flossary.style.overflowY = "hidden";
   glable.style.height = "0"
   glable.style.display = "none";
   openbook.style.bottom = "0.5vh";
  } else {
   glable.style.display = "inline-block";
   flossary.style.overflowY = "scroll";
   glable.style.height = "30vh";
   flossary.style.height = "30vh";
   openbook.style.bottom = "30.5vh";
  }
  const button = document.getElementById('codebook');
  button.addEventListener('onclick', () => {
   if (footer === true) { setFooter(false) } else { setFooter(true) }
  })
 }) 
 return (
  <div id="glossary" className="feet nofeet">
   <Button variant="outline-secondary" id='codebook' onClick={(() => {
    if (footer === true) { setFooter(false) } else { setFooter(true) }
   })}><GiSpellBook/></Button>
   <Table id="glable" size="sm" striped bordered hover>
    <thead>
     <tr>
      <th scope='col'>Code</th>
      <th scope='col'>Name</th>
      <th scope='col'>Gloss</th>
     </tr>
    </thead>
    <tbody>
     {glossary?.map(code => 
      <tr key={code.shortCode}>
       <td>
        <mark className={code.shortCode}><b>{code.shortCode}</b></mark>
       </td>
       <td>
        <mark className={code.shortCode}>{code.codeName}</mark>
       </td>
       <td>
        {code.codeGloss}
       </td>
      </tr>
     )}
    </tbody>
   </Table>
  </div>
 )
}

const Glossary: React.FC<{glossary: CodeProps[]}> = ({ glossary }) => {
  let css: string = '';
  for (let i = 0; i < glossary.length; i++) {
    const str = 'mark.' + glossary[i].shortCode + ' { background-color: ' + glossary[i].colorCode + '; } ';
    css += str;
  }
 return (
  <details className= 'glossary'>
   <summary>Currently-existing codes:</summary>
   <div id='definitions'>
    {glossary?.map(code => (
    <p key={code.shortCode}>
     <mark className={code.shortCode}><dfn><b>{code.codeName}</b></dfn> (<abbr title={code.codeName}><code>{code.shortCode}</code></abbr>)</mark>: <i>{code.codeGloss}</i>
    </p>
   ))}
   </div>
  <style jsx>
    {`mark {
       font-family: "Victor Mono", "Anonymous Pro", "Courier Prime", monospace;
      }
     ${css}`}
  </style>
  </details>
 )
}

export const getServerSideProps: GetServerSideProps = async () => {
 const res = await fetch(`http://localhost:3001/gloss`);
// console.log("here's await res clone text output:"); console.log(await res.clone().text());
 const glossary = await res.json();
// console.log("here's the glossary output:"); console.log(glossary);
 return {
  props:
   { glossary }
 }
}

export default Glossary 