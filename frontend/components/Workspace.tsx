import React, { ReactNode } from "react"

type Props = {
 children: ReactNode
}

const StatementBox: React.FC<Props> = ( props ) => (
 <div className='statement_box'>
  {props.children}
 </div>
)


