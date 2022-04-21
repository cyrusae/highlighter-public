import { Row, Col, Container, Stack } from 'react-bootstrap'
import react from 'react'
import React from 'react'
import { FlagBar } from './FlagTracker'

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
   <Col style={{ paddingLeft: 0, paddingRight: 0 }} className="sideshow col-auto">
    <FlagBar />
   </Col>
   {props.children}
  </Row>
  </Container>
 )
}

export default Layout