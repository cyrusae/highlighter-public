import React from 'react'
import Router from 'next/router'

export type NavButtonProps = {
 statementID: number;
 updatedAt: Date;
}

const Next: React.FC<{current: NavButtonProps}> = ({current}) => {
 const currentID = current.statementID;
 const lastUpdated = current.updatedAt;

 
}