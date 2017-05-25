const path = require('path');
const fs = require('fs');
module.exports = function filterFilesByExt(dirname, extension, cb){
    fs.readdir(dirname, (err, list) => {
        if (err) {
            return cb(err);
        }

        list = list.filter((filename) => {
            return path.extname(filename) === `.${extension}`
        })

        cb(null, list);
    })
}