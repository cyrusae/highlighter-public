import React from 'react'
import { GetServerSideProps } from 'next'
import Statement, { StatementProps } from '../components/Statement'
import { NavMini } from '../components/Navigation'

type Props = {
  pile: StatementProps[]
}

const Desk: React.FC<Props> = props => {
  return (
    <main>
     {props.pile.map(statement => (
      <div key={statement.statementID} className="statement">
       <Statement statement={statement} />
       <NavMini current={statement.statementID} />
     </div>
    ))}
  </main>
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
