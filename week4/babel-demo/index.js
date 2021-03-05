import fetch from "node-fetch";


const test = (url) => new Promise(function (resolve, reject){

    if (url != ""){
    resolve(fetch(url).then(res => res.json()))
    } else{
        reject(new Error("No url"))
    }

})

 function getJokes() {

    var promises = []

    for (var i = 0; i < 5; i++){
        promises[i] = test("http://api.icndb.com/jokes/random?limitTo=[nerdy]")
    }

     Promise.all(promises).then((sec) => {
        console.log(sec)})
}

async function getJokeFast() {

    var promises = []

    for (var i = 0; i < 5; i++){
        promises[i] = test("http://api.icndb.com/jokes/random?limitTo=[nerdy]")
    }

    let d = await Promise.any(promises)
    console.log(d.value.joke)

}

getJokeFast()