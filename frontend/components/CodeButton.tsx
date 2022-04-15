import React, { useState } from 'react';
import { GetServerSideProps } from 'next'
import Router from 'next/router';

type Props = {
 code: string;
 highlight: string;
}

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
     let highlighted = '<mark codeName="' + code + '">' + phrase + '</mark>';
     annot8.push(highlighted);
    } else {
     annot8.push(pieces[i]);
    }
   }
   const output = annot8.join('');
   statement.innerHTML = output;
   const plaintext = statement.innerText;
   //send this to the backend (output, plaintext, the phrase, and the highlight, along with existing context of where we are)
  }}>
   Code
  </div>
 )
}