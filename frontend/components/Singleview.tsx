import react from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Layout from './Layout'
import FootBook from './Glossary'
import { Flagging } from './FlagTracker'

const Singleview: React.FC<{}> = (props) => {
 return (
  <Layout>
   <Container fluid>
    <Col className='md-col-auto'>
     <Row>
     </Row>
    </Col>
    <Row id='workspace'>
     {props.children}
    </Row>
   </Container>
  </Layout>
 )
}

export default Singleview