import react from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import Layout from './Layout'
import { FootlessBook } from './Glossary'
import { Flagging } from './FlagTracker'

const Multiview: React.FC<{}> = (props) => {
 return (
  <Layout>
  <Container fluid="md" className="multiview">
   <Row>
    <Col>
     <Flagging />
 </Col>
    <Col md={9}>
     {props.children}
    </Col>
    <Col></Col>
   </Row>
  </Container>
  </Layout>
 )
}

export default Multiview