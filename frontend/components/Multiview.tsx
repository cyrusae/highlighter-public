import react from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import Layout from './Layout'

const Multiview: React.FC<{}> = (props) => {
 return (
  <Layout>
  <Container fluid="md" className="multiview">
   <Row>
    <Col></Col>
    <Col md={8}>
     {props.children}
    </Col>
    <Col></Col>
   </Row>
  </Container>
  </Layout>
 )
}

export default Multiview