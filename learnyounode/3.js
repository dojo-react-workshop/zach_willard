var fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2], 'utf-8');
var arr = fileContents.split('\n');

console.log(arr.length - 1);