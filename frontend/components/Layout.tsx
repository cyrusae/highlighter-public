import { Row, Container } from 'react-bootstrap'
import React from 'react'

const Layout: React.FC<{}> = (props) => {
 return (
  <Container fluid>
  <Row>
   {props.children}
  </Row>
  </Container>
 )
}

export default Layout