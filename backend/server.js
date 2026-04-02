const http = require('http');

http.createServer((req, res) => {

    if (req.url.startsWith('/api')) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hello from Backend 🚀");
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }

}).listen(3000);

console.log("Server running on port 3000");
