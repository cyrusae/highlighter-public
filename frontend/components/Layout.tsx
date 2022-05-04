import { Row, Col, Container, Stack } from 'react-bootstrap'
import react, { useEffect, useState } from 'react'
import React from 'react'
import { FlagBar } from './FlagTracker'
import { Flagging } from './FlagTracker'

const Layout: React.FC<{}> = (props) => {
 const styles = {
  col: {
   paddingLeft: 0,
   paddingRight: 0
  }
 }
 return (
  <Container fluid>
  <Row>
   {props.children}
  </Row>
  </Container>
 )
}

export default Layout