import { Row, Col, Container, Stack } from 'react-bootstrap'
import react from 'react'

const Layout: React.FC<{props}> = (props) => {
 return (
  <Container>
   {props.children}
  </Container>
 )
}