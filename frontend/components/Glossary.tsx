import React from 'react'
import { GetServerSideProps } from 'next'
import { CodeProps } from './Colormaker'

export type CodeList = {
 shortCode: string;
 codeName: string | null;
 codeGloss: string | null;
 colorCode: string | null;
}

const Glossary: React.FC<{glossary: CodeProps[]}> = ({ glossary }) => {
  let css: string = '';
  for (let i = 0; i < glossary.length; i++) {
    const str = 'mark.' + glossary[i].shortCode + ' { background-color: ' + glossary[i].colorCode + '; } ';
    css += str;
  }
// console.log("imported css:"); console.log(css);
 return (
  <details>
   <summary>Currently-existing codes:</summary>
   {glossary?.map(code => (
    <p key={code.shortCode}>
     <mark className={code.shortCode}><dfn><b>{code.codeName}</b></dfn> (<abbr title={code.codeName}><code>{code.shortCode}</code></abbr>)</mark>: <i>{code.codeGloss}</i>
    </p>
   ))}
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
 console.log("here's await res clone text output:"); console.log(await res.clone().text());
 const glossary = await res.json();
 console.log("here's the glossary output:"); console.log(glossary);
 return {
  props:
   { glossary }
 }
}

export default Glossary 