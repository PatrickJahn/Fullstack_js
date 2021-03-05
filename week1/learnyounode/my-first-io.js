 const fs = require('fs');
 let buf = fs.readFileSync(process.argv[2]); 
 let bufStr = buf.toString()
 let arr = bufStr.split("\n")
 console.log(arr.length - 1);