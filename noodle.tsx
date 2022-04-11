//NOTE: this file is not used by anything
//It's for putting thoughts on how to code parts of the app before I have to make a call about where the code in question needs to go 

const statement = document.querySelector('statement').innerHTML.toString();

let markCode: string | null = null; 
//allow for a fallback that fails to code anything but "code, I guess" with null

//get the dropdown:
const codeSetter = document.querySelector('select') 
//TODO: add better identifier so I'm not dicking over anyone who wants to add another dropdown for some reason

codeSetter.addEventListener('change', () => {
 let markCode: string = `${this.target.value}`; //set the content
 return markCode;
})

const markOpenClass: string = '<mark className="quote'
let markStart: string = markOpenClass + markCode + '">'; 
//can this be const because it gets called again every time...?
const markEnd: string = '</mark>'

document.onselectionchange = function select() {
 let highlight: string = document.getSelection.toString();
 return highlight;
}

//TODO: send information about that highlight to Encoding (where?)

function addMark(statement: string, highlight: string): string {
 let parts = statement.split(highlight);

 for (let i = 0; i < parts.length; i++) {
  let skimmed = parts[i]; //'skimmed' because we're quickly looking it over to make sure it matches the content we want. I'm not always imaginative with my variable names, okay

  if (parts[i] === highlight) {
   let skimmed = markStart + highlight + markEnd;
   return skimmed;
  }

  //if it was highlighted, the html should now be changed accordingly
  parts[i] = skimmed;
 }

 let highlightedStatement: string = parts.join('');
 return highlightedStatement;
}

//TODO: replace innerHTML of statement with highlightedStatement
//TODO: replace statement in Statements with newest version of highlightedStatement
//TODO: other database updates

//I think that may have to happen elsewhere than this part of the code?