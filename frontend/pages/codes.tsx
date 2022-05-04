import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import Colormaker, { CodeProps } from '../components/Colormaker'
import Glossary, { FootlessBook, CodeList, FootBook } from '../components/Glossary'
import Map from '../components/Remap'
import { Row, Col, Container, Stack } from 'react-bootstrap'


type Props = {
 initialGlossary: CodeProps[];
}

const Codepage: React.FC<Props> = (props) => {
 useState();
 return (
  <Container fluid="md" id='codepage'>
  <Stack gap={3}>
  <Glossary glossary={props.initialGlossary} />
  <Colormaker glossary={props.initialGlossary}/>
  <Glossary glossary={props.initialGlossary} />
  <Map glossary={props.initialGlossary}/>

  </Stack>
  <FootlessBook glossary={props.initialGlossary} />
  </Container>
 )
}
export default Codepage


export const getServerSideProps: GetServerSideProps = async () => {
 const res = await fetch(`http://localhost:3001/gloss`);
// console.log("here's await res clone text output:"); console.log(await res.clone().text());
 const initialGlossary = await res.json();
// console.log("here's the glossary output on load:"); console.log(initialGlossary);
 return {
  props:
   { initialGlossary }
 }
}
