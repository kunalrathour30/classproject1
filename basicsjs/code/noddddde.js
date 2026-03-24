const fs = require('fs');
console.log(fs);

fs.readFile('basicsjs/code/data.js', 'utf8', (err, data) => {
    

    console.log('File contents:', data);
});


fs.appendFile('basicsjs/code/data.js', '\n// Appended line by noddddde.js', (err) => {
             
    console.log('Line appended successfully!');
});

/*
const fs= require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const output =fs.createWriteStream('basicsjs/code/data.txt.gz');
const input = fs.createReadStream('basicsjs/code/data.js');
input.pipe(gzip).pipe(output);
console.log('File compressed successfully!');
*/
