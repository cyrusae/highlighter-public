import { GetServerSideProps } from 'next'
import React from 'react'
import Colormaker, { CodeProps } from '../components/Colormaker'
import Glossary, { CodeList } from '../components/Glossary'
import Map from '../components/Remap'

type Props = {
 initialGlossary: CodeProps[];
}

const Codepage: React.FC<Props> = (props) => {
 return (
  <div>
   <Glossary glossary={props.initialGlossary} />
   <Colormaker/>
   <Map glossary={props.initialGlossary}/>
  </div>
 )
}
export default Codepage


export const getServerSideProps: GetServerSideProps = async () => {
 const res = await fetch(`http://localhost:3001/gloss`);
 console.log("here's await res clone text output:"); console.log(await res.clone().text());
 const initialGlossary = await res.json();
 console.log("here's the glossary output on load:"); console.log(initialGlossary);
 return {
  props:
   { initialGlossary }
 }
}
