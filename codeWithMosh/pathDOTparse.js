const path = require('path');

var pathObj = path.parse(__filename);


console.log(pathObj);

/*

  root: 'C:\\',
  dir: 'C:\\Coding\\NodeJS',
  base: 'test.js',
  ext: '.js',
  name: 'test'

*/


console.log(__filename); // C:\Coding\NodeJS\test.js