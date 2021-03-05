const fs = require('fs');


fs.readdir(process.argv[2], callBack)

function callBack(err, data){
   let list =  data.filter((x1) => {
       var arg = process.argv[3]
        if( x1.substr(x1.length  - arg.length) == arg) {
            if (x1.length > 3) {
                console.log(x1)
            }
          
        }
    })
    
    
}