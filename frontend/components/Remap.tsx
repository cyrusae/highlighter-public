import React from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { CodeList } from './Glossary'
import { CodeProps } from './Colormaker'

const Map: React.FC<{glossary: CodeProps[]}> = ({ glossary }) => {
  const bgopen = ' { background-color: ';
  const bgclose = '; }  ';

 return (
  <>
  <div id='sassmap'>
  <h2>Map for use in Sass</h2>
  <p><i>Reload the page to regenerate.</i></p>
   <code>
    $codes: (</code>
    {glossary?.map(code => <code key={code.shortCode}>"{code.shortCode}": {code.colorCode}, </code>)}
    <code>);
   </code>
   <details open>
     <summary>When using...</summary>
     <i>Remember to trim the trailing space and comma off of your output before using it. When pasting into <code>markers.css</code>, check that no data has been lost.</i>
    </details>
  </div>
  <div id='justcss'>
    <h2>Plain CSS to copy and paste</h2>
    {glossary?.map(code => <code key={code.shortCode}>.{code.shortCode}, .{code.shortCode} * {bgopen}{code.colorCode} !important{bgclose}</code>)}
  </div>
  </>
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

export default Map 