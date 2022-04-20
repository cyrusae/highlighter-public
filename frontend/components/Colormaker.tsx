import React, { useEffect } from 'react'
import Router from 'next/router'
import Map from './Remap'
import axios from 'axios'
import Glossary, { CodeList } from './Glossary'
import { Form, Button, Row, Col, Container, Stack, InputGroup, FloatingLabel } from 'react-bootstrap'
import Feedback from 'react-bootstrap/Feedback'


export type CodeProps = {
 shortCode: string;
 codeName: string | null;
 codeGloss: string | null;
 colorCode: string | null;
}

const Colormaker: React.FC<{glossary: CodeList[]}> = ({ glossary }) => {
 const [ code, setCode ] = React.useState('');
 const [ name, setName ] = React.useState('');
 const [ gloss, setGloss ] = React.useState('');
 const [ color, setColor ] = React.useState('');
 const [ valid, setValidated ] = React.useState(false);

 const validCode = (glossary: CodeList[], code: string) => {
 let existingCodes: string[] = [];
 for (let i = 0; i < glossary.length; i++) {
  existingCodes.push(glossary[i].shortCode);
 }
 if (existingCodes.includes(code) === false) {
  setCode(code);
  setValidated(true);
//  return true;
 } 
 setValidated(false);
}

// const codeIsValid = () => setValid(true);
// const codeIsInvalid = () => setValid(false);

 const handleSubmit = (e) => {
  e.preventDefault();
//  console.log('Submit button clicked!');
  axios.post('http://localhost:3001/newcode', {
   shortCode: code, 
   codeName: name, 
   codeGloss: gloss, 
   colorCode: color,
  });
  setCode('');
  setName('');
  setColor('');
  setGloss('');
 }

 return (
  <Col>
  <Form name='colormaker' onSubmit={handleSubmit}>
   <Row>
    <Form.Group controlId="shortCode">
    <InputGroup>
     <InputGroup.Text>
      Code
     </InputGroup.Text>
     <Form.Control  type='text'  value={code} placeholder="(no spaces)" onChange={(e) => setCode(e.target.value)} required />
    </InputGroup>
    <Form.Text className='text-muted'>
     A-Za-z0-9_ values only. Duplicate codes <i>will</i> crash the server if successfully sent. Refresh and check your most recent glossary if you're unsure.
    </Form.Text>
   </Form.Group>
  </Row>
  <Form.Group controlId="codeName">
   <InputGroup>
   <InputGroup.Text>
    Name
   </InputGroup.Text>
   <Form.Control type='text' placeholder='Human-readable moniker' value={name} onChange={(e) => setName(e.target.value)} />
   </InputGroup>
  </Form.Group>
  <Form.Group controlId="codeGloss">
   <Form.Control as='textarea' placeholder='Describe this code' value={gloss} onChange={(e) => setGloss(e.target.value)} />
  </Form.Group>
  <Form.Group controlId="formCodeColor">
     <InputGroup id='codeColor'>
      <InputGroup.Text>Color</InputGroup.Text>
      <Form.Control value={color} type='text' placeholder='#hex' onChange={(e) => setColor(e.target.value)} />
      <Form.Control type='color' onChange={(e) => setColor(e.target.value)} value={color} />
   <Button variant='outline-secondary' size='sm' type='button' id='colorRandom' value={color} onClick={() => {
    const red = (Math.ceil(Math.random() * 65) + 190).toString(16);
    const blue = (Math.ceil(Math.random() * 65) + 190).toString(16);
    const green = (Math.ceil(Math.random() * 65) + 190).toString(16);
    const random = '#' + red + blue + green;
//     console.log("the generated random color:"); console.log(random); //troubleshooting tool
    setColor(random)}}>Random color</Button>     
   </InputGroup>
  </Form.Group>
  <Row>
   <div id='preview'>
     <p>An example of the new code mixed in with other text. <mark className={code}><b>{name}</b> (<code>{code}</code>): <i>{gloss}</i></mark> Updates appear here as you edit, but your code has not been submitted yet.</p>
    <style jsx>{` mark.${code},.${code} * { 
      background-color: ${color} !important;
     }
    `}</style>
    </div>
  </Row>
  
   <Row><Button size='lg' type='submit' variant='success'>Submit</Button></Row> 
  </Form>
  <p><b><i>Refresh the page after submitting</i></b> in order to see an updated code list (recommended to avoid accidental duplicates).</p>
  </Col>
 )
}

export default Colormaker