const http = require('http');
const route = require('./route');


const server = http.createServer(route);

server.listen(3000);

console.log('Listening port on 3000...');