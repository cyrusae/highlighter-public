Here's the loop to produce the colored mark CSS based on glossary loading from server:
```
  let arcss: string[] = [];
  for (let i = 0; i < glossary.length; i++) {
    const str = 'mark.' + glossary[i].shortCode + ' { background-color: ' + glossary[i].colorCode + '; } ';
    arcss.push(str);
  }
  const css = arcss.join('');
```