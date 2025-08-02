const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    
    if (url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Enter Message</title>
                </head>
                <body>
                    <form method="POST" action="/log">
                        <input type="text" name="message">
                        <button type="submit">Save</button>
                    </form>
                </body>
            </html>
        `);
        return res.end(); // işlem tamamlandı, çık
    }

    if(url === '/log' && method === 'POST') {
        fs.writeFileSync('message.txt', 'deneme');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    // Diğer URL'ler için de cevap ver (önemli!)
    /*
    res.write(`
        <html>
            <head><title>Not Found</title></head>
            <body><h1>404 - Page Not Found</h1></body>
        </html>
    `);
    res.end();
    */
});

server.listen(3000);
