import React, { useState } from 'react';
import { GetServerSideProps } from 'next'
import Router from 'next/router';
import axios from 'axios';

const CodeButton: React.FC<{code: string}> = ({code}) => {
 const statement = document.getElementById('statebox');
 return (
  <div aria-role='button'  onMouseUp={() => {
   const highlight = document.getSelection();
   const phrase = highlight.toString();
   const pieces = statement.innerHTML.split(phrase);
   let annot8: string[];
   for (let i = 0; i < pieces.length; i++) {
    if (pieces[i] === phrase) {
     let highlighted = '<mark className="' + code + '">' + phrase + '</mark>';
     //to add a hover tooltip with the code being used: add
     // '<span className="tooltip">' + code + '</span>'
     //before the semicolon. Will only show the spaces-less shortcode unless you change this to receive the code name as additional props though.
     annot8.push(highlighted);
    } else {
     annot8.push(pieces[i]);
    }
   }
   const output = annot8.join('');
   statement.innerHTML = output;
   const plaintext = statement.innerText;
   //send this to the backend (output, plaintext, the phrase, and the highlight, along with existing context of where we are)
//   axios.put('../upd8', {})
//   will need to change props handling so that this can know the following:
//    ID of statement we're on (current) to tie the record to it; actually I think that might be it
  }}>
   Code
  </div>
 )
}

export default CodeButton