import react from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Layout from './Layout'
import FootBook from './Glossary'

const Singleview: React.FC<{}> = (props) => {
 return (
  <Layout>
   {props.children}
  </Layout>
 )
}

export default Singleview