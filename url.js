const url = require('url');

const address = 'http://tahaduman.com/kurslar?year=2019&month=nisan';
let result = url.parse(address, true);
console.log(result);
console.log(result.path);
console.log(result.query.year);
