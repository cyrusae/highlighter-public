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
  if (props.pile.length < 1) {
    return (
      <>
        You don't seem to have any statements lying around.
      </>
    )
  }
  return (
    <Multiview>
     {props.pile.map(statement => (
      <div key={statement.statementID}>
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