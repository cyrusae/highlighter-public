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
  console.log(await res.clone().text()) //will not show me it :(
  const pile = await res.json()
  console.log(pile) //also will not show me it :(
  return {
   props: 
    { pile }
//   props: { pile: {
//    test: 'test'} 
//   },
  }
}

export default Desk
