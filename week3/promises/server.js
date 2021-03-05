const http = require('http');
const {makeRandoms} = require("./crypteModule");


async function test(){
     let d = await makeRandoms([48, 40, 34, 20, 12, 6]);
     return d;
}




const server =  http.createServer((req, res) =>  {

        if (req.url === '/api/securerandoms') {
                
                test()
                .then((data) => {
                        res.write(JSON.stringify(data))
                        return res.end();
                })
        
        }
        if (req.url === '/') {
          res.setHeader('Content-Type', 'text/html');
          res.write(`<h2>Simple node HTTP server demo</h2>
            <p>Exposes this endpoint <code>/api/securerandoms</code></p>
          `);
          return res.end();
        }
      });
      server.on('connection', (sock) => {
        // You can get the client-IP in here, using sock.remoteAddress)
      
      
      });
      server.listen(3000);
      console.log('listening on 3000');