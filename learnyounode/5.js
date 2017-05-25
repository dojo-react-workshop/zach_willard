var fs = require('fs');

var directory = process.argv[2];
var regex = new RegExp(`.*\.(${process.argv[3]})`);

fs.readdir(directory, function(err, data) {
    data.forEach((file) => {
       if (regex.test(file)){
           console.log(file);
       }
    })
})
