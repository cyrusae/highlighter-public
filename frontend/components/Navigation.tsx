import React, { FC } from 'react'
import Router from 'next/router'
import { GetServerSideProps } from 'next'
import axios from 'axios'

export type NavInfoProps = {
 statementID: number;
 nextID: number;
 prevID: number;
}

export type NavButtonProps = {
 action: 'next' | 'prev' | 'flag' | 'pause';
}

const NavButton: React.FC<{info: NavInfoProps, act: NavButtonProps["action"]}> = ({info, act}) => {
 const currentID = info.  statementID;

  if (act === 'next') {
    return (
      <button type='button' className='button' onClick={() => {
        axios.put('/leave', { currentID: currentID });
       Router.push('/s', `/s/${info.nextID}`)}}>
         {act}
      </button>
      )
  } else if (act === 'prev') {
    return (
      <button type='button' className='button' onClick={() => {
        axios.put('/leave', { currentID: currentID });
       Router.push('/s', `/s/${info.prevID}`)}}>
         {act}
      </button>
      )
  } else if (act === 'flag') {
    const newFlag = currentID + ' ' + `&#013; &#010;`; //last part should produce line breaks
    return (
      <button type='button' className='button' onClick={() => {
        if (document.getElementById('flags').innerText.includes(currentID.toString()) === false)
        	{ 
          axios.put('/leave', { currentID: currentID });
          document.getElementById('flags').innerHTML += newFlag 
        }
      }}>{act}</button>
    )
  } else {
			return (
    <button type='button' className='button' 
				onClick={() => {
					axios.put('/leave', { currentID: currentID });
				}}>
      {act}
    </button>
  )
  }
}

export const Nav: React.FC<{current: NavInfoProps}> = ({current}) => {
 return (
  <div id='nav'>
   <NavButton info={current} act={'prev'} />
   <NavButton info={current} act={'pause'} />
   <NavButton info={current} act={'flag'} />
   <NavButton info={current} act={'next'} />
  </div>
 )
}

//const Next: React.FC<{current: NavButtonProps}> = ({current}) => {
// return (
//  <NavButton buttonText={'Next'} current={current}/>
// )
//}

//export const getServerSideProps: GetServerSideProps = async (context) => {
// const res = await fetch(`http://localhost:3001/next?current=${context.query.act}&now=${context.query.now}`);
// console.log("here's await fetch the next url output:");
// console.log(await res.clone().text());
// const result = await res.json();
// console.log("here is the result:"); console.log(result);
// return {
//  props: result
// }
//}