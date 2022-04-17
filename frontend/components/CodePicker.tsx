import React, { useState } from 'react';
import { GetServerSideProps } from 'next'
import { CodeList } from './Glossary'
import CodeButton from './CodeButton'
import { ReaderProps } from '../pages/s/[statementID]';

type Props = {
 glossary: CodeList[];
}

const CodeDropdown: React.FC<Props> = props => {
  const [code, setCode] = useState('');

 return (
  <div>
   <label htmlFor='code-select'>Pick a code:</label>
   <input type='select' id='code-select' onChange={ (e) => setCode(e.target.value)}>
    {props.glossary.map(code => 
     <option value={code.shortCode}>{code.codeName}</option>
    )}
   </input>
   <CodeButton code={code} />
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