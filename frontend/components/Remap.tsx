import React from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { CodeList } from './Glossary'

type Props = {
 glossary: CodeList[];
}

const Map: React.FC<Props> = props => {
 return (
  <div>
   <code>
    $codes: (
    {props.glossary.map(code => `"${code.shortCode}": ${code.colorCode}`, )}
    );
   </code>
   <p><i>(Trim the trailing space and comma off of your output before using it!)</i></p>
  </div>
 )
}
//TODO: Figuring out how best to let this update more than once without redirecting on the page 

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