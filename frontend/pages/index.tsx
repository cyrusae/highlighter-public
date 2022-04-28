import React from 'react'
import { GetServerSideProps } from 'next'
import Statement, { StatementProps } from '../components/Statement'
import Card from 'react-bootstrap/Card'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import Layout from '../components/Layout'
import Multiview from '../components/Multiview'
import DoingButtons from '../components/Signposts'

type Props = {
  pile: StatementProps[]
}

const Desk: React.FC<{}> = () => {
  return (
   <Layout>
    <DoingButtons />
   </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/all') 
//  console.log(await res.clone().text()) 
  const pile = await res.json()
  console.log(pile) 
  return {
   props: 
    { pile }
  }
}

export default Desk