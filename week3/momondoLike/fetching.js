
const fetch = require("node-fetch")


const urls =["https://jsonplaceholder.typicode.com/photos?albumId=1",
    "https://jsonplaceholder.typicode.com/photos?albumId=3",
    "https://jsonplaceholder.typicode.com/photos?albumId=5",
    "https://jsonplaceholder.typicode.com/photos?albumId=7",
    "https://jsonplaceholder.typicode.com/photos?albumId=9" ]


function fetchData(url){

   return fetch(url).then((data) => data.json())


}

 async function getData(){

    var promises = []
    var data = []
    for (var i in urls ){
            promises.push(fetchData(urls[i]))
    }
   

    for (var i in promises){
        data.push(await promises[i])
    }


return data.flat(1)

}

function filterThreeWords(data, count = 3){
  let res = data.filter((album) => {
       return countWords(album.title) == count
    })
  return res

}

function countWords(str) {
    return str.trim().split(/\s+/).length;
  }


  function shorten(data){

    let res = data.map((album)=> {
        return {id: album.albumId, title: album.title}

    })
    return res

  }

  exports.shorten = shorten;
exports.getData = getData;
exports.filter = filterThreeWords;
