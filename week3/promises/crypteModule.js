

const crypto = require('crypto');
const { resolve } = require('path');





const makeSecureRandom = (size) => new Promise(function (resolve, reject) {
    return crypto.randomBytes(size, function (err, buffer) {
        if (err) {
            reject(new Error(err))
        }
        let secureHex = buffer.toString('hex');
        resolve({length:size, random:secureHex})
    })
})


function makeRandoms(sizes){
    
    var promises = []
    sizes.map((d, i) => {
promises[i] = makeSecureRandom(d)
    })

 return Promise.all(promises)
.then((sec) => {
    return { title: `${sec.length}`, joke: sec.value.joke }
})
}

exports.makeRandoms = makeRandoms






