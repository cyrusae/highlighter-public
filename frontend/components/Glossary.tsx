import React from 'react'
import { GetServerSideProps } from 'next'

export type CodeList = {
 shortCode: string;
 codeName: string | null;
 codeGloss: string | null;
 colorCode: string | null;
}

type Props = {
 glossary: CodeList[];
}

const Glossary: React.FC<Props> = props => {
 return (
  <details>
   <summary>Currently-existing codes:</summary>
   {props.glossary.map(code => (
    <p>
     <mark className={code.shortCode}><dfn><b>{code.codeName}</b></dfn> (<abbr title={code.codeName}><code>{code.shortCode}</code></abbr>)</mark>: <i>{code.codeGloss}</i>
    </p>
   ))}
  </details>
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

export default Glossary 