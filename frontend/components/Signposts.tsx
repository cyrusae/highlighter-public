import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { Col, Stack, Button, Navbar, Row, ButtonGroup, ToggleButtonGroup } from 'react-bootstrap'
import Layout from './Layout'

//relatively quick n dirty here
const DoingButtons: React.FC<{}> = () => {
 return (
  <Layout>
   <Col md={4}></Col>
   <Col md={4}>
    <Row>
     <Stack gap={2}>
      <Button href='/desk' size='lg' variant='primary'>
       Fresh statements
      </Button>
      <Button size='lg' variant='info' href='/done'>
       Coded statements
      </Button>
      <Button href='/all' size='lg' variant='success'>
       See all
      </Button>
      <Button href='/codes' size='lg' variant='warning'>
       Codes
      </Button>
     </Stack>
    </Row>
   </Col>
   <Col md={4}></Col>
  </Layout>
 )
}

export default DoingButtons 