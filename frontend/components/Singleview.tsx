import react from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Layout from './Layout'

const Singleview: React.FC<{}> = (props) => {
 return (
  <Layout>
   <Container fluid="md" className="singleview">
    {props.children}
   </Container>
  </Layout>
 )
}