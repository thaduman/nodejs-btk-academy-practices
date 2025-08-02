const path = require('path');

let result = path.resolve('scriptC.js'); // dosya konumunu verir

result = path.extname('scriptC.js'); // uzantısının ne oluduğunu gösterir.
result = path.parse(__filename); // obje içerisinde farklı metotlarla ulaşılmak istenilenleri verir (root, dir, base, ext(uzantı), name)

console.log(result.root);
console.log(result.dir);
console.log(result.base);
console.log(result.ext);
console.log(result.name);
console.log(result);