const http = require('http');


var mymodule = require('./module1');
var dosDector = require('./dosDetector');

var DD = new dosDector(2000)
var ip; 
DD.on("DosDetected", (data) => {
    console.log(data)
}) 
const server = http.createServer((req, res) => {
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(mymodule.cpu))
    DD.addUrl(ip)
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  ip = sock.remoteAddress

});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.

