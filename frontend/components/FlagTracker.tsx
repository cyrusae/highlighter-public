import React from 'react'

const FlagTracker: React.FC<{}> = () => {
 return (
  <div className='flagtracker'>
   <details>
    <summary>Statements flagged this session:</summary>
    <textarea id='flags'></textarea>
   </details>
  </div>
 )
}

export default FlagTracker 