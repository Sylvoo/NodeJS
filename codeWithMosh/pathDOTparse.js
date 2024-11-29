const path = require('path');

var pathObj = path.parse(__filename);


console.log(pathObj);

/*
  {
  root: 'C:\\',
  dir: 'C:\\Coding\\NodeJS\\codeWithMosh',
  base: 'pathDOTparse.js',
  ext: '.js',
  name: 'pathDOTparse'
}
*/


console.log(__filename); // C:\Coding\NodeJS\test.js