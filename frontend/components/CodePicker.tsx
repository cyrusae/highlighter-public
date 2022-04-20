import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next'
import { CodeList } from './Glossary'
import Phraseview from './Phraseview';
import CodeButton from './CodeButton'
import Form from 'react-bootstrap/Form'

const CodeDropdown: React.FC<{glossary: CodeList[], current: number}> = props => {
 const [code, setCode] = useState('');
 const [phrase, setPhrase] = useState('');
 //TO DO: move phrase into props for the buttons, this is easier

 return (
  <div id='codepick'>
   <div id='phReview' />
   <Form.Group>
    <Form.Select id='code-select' onChange={(e) => setCode(e.target.value)}>
     <option value={null}>---Select a code---</option>
     {props.glossary?.map(code => 
     <option key={code.shortCode} value={code.shortCode}>{code.codeName}</option>
    )}
    </Form.Select>
   </Form.Group>
   <CodeButton code={code} current={props.current} glossary={props.glossary} />
  </div>
 )
}

export const getServerSideProps: GetServerSideProps = async () => {
 const res = await fetch(`https://localhost:3001/gloss`);
 console.log("here's await res clone text output:"); console.log(await res.clone().text());
 const glossary = await res.json();
 console.log("here's the glossary output:"); console.log(glossary);
 return {
  props:
   { glossary }
 }
}
//The dropdown and glossary (for example) making separate requests seems profoundly inelegant at best; figure out how to streamline that.

export default CodeDropdown 

///Non-bootstrap:
//<select id='code-select' onChange={ (e) => setCode(e.target.value)}>
//<option value={null}>---Select a code---</option>
//{props.glossary?.map(code => 
//<option key={code.shortCode} value={code.shortCode}>{code.codeName}</option>
//)}
//</select>