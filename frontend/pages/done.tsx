import React from 'react'
import { GetServerSideProps } from 'next'
import Statement, { StatementProps } from '../components/Statement'
import Multiview from '../components/Multiview'

type Props = {
  pile: StatementProps[]
}

const Desk: React.FC<Props> = props => {
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
  const res = await fetch('http://localhost:3001/seen') 
//  console.log(await res.clone().text()) 
  const pile = await res.json()
  console.log(pile) 
  return {
   props: 
    { pile }
  }
}

export default Desk