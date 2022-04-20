import react from 'react'
import { Row, Col, Container, Stack } from 'react-bootstrap'

const Multiview: React.FC<{props}> = (props) => {
 return (
  <Container fluid="md">
   <Row>
    <Col>
     {props.children}
    </Col>
   </Row>
  </Container>
 )
}

export default Multiview