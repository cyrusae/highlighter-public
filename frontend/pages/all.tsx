import React from 'react'
import { GetServerSideProps } from 'next'
import Statement, { StatementProps } from '../components/Statement'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Multiview from '../components/Multiview'
import Router from 'next/router'

type Props = {
  pile: StatementProps[]
}

const Desk: React.FC<Props> = props => {
  return (
    <Multiview>
     {props.pile.map(statement => (
      <div key={statement.statementID} onClick={() => {
       Router.push('/s/[statementID]', `/s/${statement.statementID}`)
      }}>
      <Statement statement={statement} />
      </div>
     
    ))}
  </Multiview>
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
