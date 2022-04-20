import { GetServerSideProps } from 'next'
import React, { useState } from 'react'
import Colormaker, { CodeProps } from '../components/Colormaker'
import Glossary, { CodeList } from '../components/Glossary'
import Map from '../components/Remap'
import { Row, Col, Container, Stack } from 'react-bootstrap'


type Props = {
 initialGlossary: CodeProps[];
}

const Codepage: React.FC<Props> = (props) => {
 useState();
 return (
  <Container fluid="md" id='codepage'>
  <Row>
   <Col>
    <Glossary glossary={props.initialGlossary} />
   </Col>
  </Row>
    <Colormaker glossary={props.initialGlossary}/>
   <Row>
    <Col>
     <Glossary glossary={props.initialGlossary} />
    </Col>
   </Row>
   <Row>
    <Col>
    <Map glossary={props.initialGlossary}/>
    </Col>
   </Row>
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
