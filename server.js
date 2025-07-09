const http = require('http');

http.createServer((req, res) => {
  res.end('welcome to server');
}).listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
