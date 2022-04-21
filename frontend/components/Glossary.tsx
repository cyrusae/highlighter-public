import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { CodeProps } from './Colormaker'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export type CodeList = {
 shortCode: string;
 codeName: string | null;
 codeGloss: string | null;
 colorCode: string | null;
}

export const Codebook: React.FC<{glossary: CodeProps[]}> = ({ glossary }) => {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleOpen = () => setShow(true);
 return (
  <>
   <div id='codeS' onClick={handleOpen}>📖</div>
  </>
 )
}

export const FootBook: React.FC<{glossary: CodeProps[]}> = ({ glossary }) => {

 const [ footer, setFooter ] = useState(Boolean)
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
   openbook.style.bottom = "0.5vh"
  } else {
   glable.style.display = "inline-block";
   flossary.style.overflowY = "scroll";
   glable.style.height = "50vh";
   flossary.style.height = "50vh";
   openbook.style.bottom = "50vh";
  }
 })
 return (
  <div id="glossary" className="feet">
   <Button variant="outline-secondary" size="sm" id='codebook' onClick={() => { if (footer === true) { setFooter(false) } else { setFooter(true) }; }}>Codebook</Button>
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