
const http = require("http");
const { default: fetch } = require("node-fetch");

const {getData, filter, shorten} = require("./fetching")


const server =  http.createServer((req, res) =>  {

    if (req.url === '/api/albums') {
            
        getData()
        .then((data) => {
            
            return res.end(JSON.stringify(data))
        })

    
    }

    if (req.url === '/api/albums/3') {
            
        getData()
        .then((data) => {
            
               let filtered = filter(data)
            return res.end(JSON.stringify(filtered))
        })
    }

    if (req.url === '/api/albums/short') {
            
        getData()
        .then((data) => {
            
               let shortent = shorten(data)
            
            return res.end(JSON.stringify(shortent))
        })
    }


    if (req.url.includes("/api/albums/") && req.url !== "/api/albums/short") {
         let wordsCount = req.url.replace("/api/albums/", "")
         if (!Number(wordsCount)){
             let err = {err: `${wordsCount} is not a number `}
           return res.end(JSON.stringify(err))
         }
        getData()
        .then((data) => {
            
               let filtered = filter(data, wordsCount)
            
            return res.end(JSON.stringify(filtered))
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