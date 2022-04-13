

//NOTE: this file is not used by anything
//It's for putting thoughts on how to code parts of the app before I have to make a call about where the code in question needs to go 

const statement = document.querySelector('.statement').innerHTML;

let markCode: string | null = null; 
//allow for a fallback that fails to code anything but "code, I guess" with null

//get the dropdown:
const codeSetter = document.querySelector('.codePicker') 

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
  let skimmed = parts[i]; 
  //'skimmed' because we're quickly looking it over to make sure it matches the content we want. 
  // I'm not always imaginative with my variable names, okay

  if (parts[i] === highlight) {
   let skimmed = markStart + highlight + markEnd;
   //if you want to show a tooltip with the code given, add the CSS in noodle_harder and change the previous line to
   // let skimmed = markStart + highlight + markEnd + '<span class="tooltip">' + markCode + '</span>'
   //to generate tooltips that will show the code on hover. (N.B. this will still only show the css class/no-spaces version of the code.)
   return skimmed;
  }

  //if it was highlighted, the html should now be changed accordingly
  parts[i] = skimmed;
 }

 let highlightedStatement: string = parts.join('');

 //overwrite the innerHTML with the update:
 statement = highlightedStatement; 

 //return for sending to backend?
 return highlightedStatement;
}

//TODO: replace statement in Statements with newest version of highlightedStatement
//TODO: other database updates

//I think that may have to happen elsewhere than this part of the code?


function CodeButton(highlight: string, statement: string, statementID: number, markCode: string | null) {
 //overwrite displayed content
 addMark(statement, highlight);

 //TODO: send that back to the Statements database
 //TODO: push new entry to the Encoding database

}


const exampleCodeList:(string[])[] = [['misspelling', 'Misspelling', 'IMAGINE A HEX CODE HERE'], ['age-based', 'Age judgment', 'IMAGINE A HEX CODE HERE'], ['at-me', 'Statement about me', 'IMAGINE A HEX CODE HERE']]
//this way I can have longer elaborations, and also maybe add hex codes to that list natively?

//this should allow for importing a list of codes 
const CodePicker = (codeList:(string[])[] ) => {
// const [code, setCode] = useState('');
// Do I need that?

 let selectList:string[] = []
 for (let i = 0; i < codeList.length; i++) {
  let entry:string[] = codeList[i];
  let opt: string = '<option value="' + entry[0] + '">' + entry[1] + '</option>'
  selectList.push(opt)
 }

 const options = selectList.join('');

 return (
  <div className='coder'>
   <label for='codePicker'>Select code:</label>
   <select 
    name='codePicker' id='codePicker'
//    onChange={e => setCode(e.target.value)} 
// do I need that?
   >
    {options}
   </select>
   <button onClick={CodeButton}>Code</button>
  </div>
 ) //How to make sure that the button is getting the right variables?
}

//this is the wrong kind of indent for my code because VSC on Mac's settings sync is worthless.

//why does the example not have an index.d.ts?
//if it did, I'd need this sort of thing

//const prisma = new PrismaClient({
//    rejectOnNotFound: {
//      findUnique: true,
//    },
//  })
//export type StatementFindUniqueID = {
//    where: StatementIDWhereUniqueInput
//    select?: StatementSelect | null
//    include?: StatementInclude | null
//}