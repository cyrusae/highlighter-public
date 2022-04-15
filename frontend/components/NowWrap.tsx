import React from 'react'

const NowBox: React.FC<{props}> = (...props) => {
 const setNow = () => {
  const now = Date.now();
  return now;
 }
 
 return (
  <div onFocus={setNow}>
   {props}
  </div>
 )
}

export default NowBox