const dirname = process.argv[2];
const extFilter = process.argv[3];

const filterFilesbyExt = require('./6_mod');

filterFilesbyExt(dirname, extFilter, (err, fileArray) => {
    if (err) {
        return console.log('There was an error', err);
    }

    fileArray.forEach((filename) => {
        console.log(filename);
    });
})