import React from 'react'
import { GetServerSideProps } from 'next'
import Statement, { StatementProps } from '../components/Statement'


type Props = {
  pile: StatementProps[]
}

const Desk : React.FC<Props> = props => {
  return (
    <main>
     {props.pile.map(statement => (
      <div key={statement.statementID} className="statement">
       <Statement statement={statement} />
     </div>
    ))}
  </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/unseen') //currently not working
  const pile = await res.json()
  return {
   props: 
    { pile }
//   props: { pile: {
//    test: 'test'} 
//   },
  }
}

export default Desk
