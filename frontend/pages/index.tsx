import React from 'react'
import { GetServerSideProps } from 'next'
import Statement, { StatementProps } from '../components/Statement'
import { NavMini } from '../components/Navigation'
import Card from 'react-bootstrap/Card'

type Props = {
  pile: StatementProps[]
}

const Desk: React.FC<Props> = props => {
  return (
    <main>
     {props.pile.map(statement => (
      <Card body key={statement.statementID} className="statement">
       <Statement statement={statement} />
       <NavMini current={statement.statementID} />
     </Card>
    ))}
  </main>
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
