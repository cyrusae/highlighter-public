import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next'
import Router from 'next/router';
import axios from 'axios';
import { CodeList } from './Glossary';

const CodeButton: React.FC<{code: string, current: number, glossary: CodeList[]}> = ({code, current, glossary}) => {
 return (
  <>
  <button id='codeButton' onClick={() => {
   if (typeof document !== undefined) {
   const statement = document.getElementById('statebox');
   const highlight = document.getSelection();
   const phrase = highlight.toString();
   const html = statement.innerHTML.toString();
   const highlighted = '<mark class="' + code + '">' + phrase + '</mark>';
   const output = html.replace(phrase, highlighted);
   console.log(output);
   statement.innerHTML = output;
   const plaintext = statement.innerText;
   const now = Date.now();
   axios.put('http://localhost:3001/upd8/', {
     currentID: current,
     now: now,
     annot8: output,
     plain: plaintext,
     phrase: phrase,
     codeUsed: code
   })}
   //send this to the backend (output, plaintext, the phrase, and the highlight, along with existing context of where we are)
//   axios.put('../upd8', {})
//   will need to change props handling so that this can know the following:
//    ID of statement we're on (current) to tie the record to it; actually I think that might be it
  }}>
   Code
  </button>
  </>
 )
}

export default CodeButton