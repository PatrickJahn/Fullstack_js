


const stringManipulator = (text) => new Promise(function(resolve, reject) {


    let textObj = {upperCased: text.toUpperCase(),
                   msgLength: text.length}
                   textObj.asJson = () => {
                       let words = text.split(" ");
                       let jsonObj = {words: words}
                       return JSON.stringify(jsonObj)
                   }
resolve(textObj)


})







stringManipulator("JavaScript is cool, even when it sucks", 1000)
 .then(data => {
   console.log("From first promise: " + data.upperCased);
   console.log("From first promise: " + data.msgLength);
   return data.asJson()  //Opposite to when we do res.json() with fetch, since this
 			 //should return a JSON-string
 })
 .then(res => {
   console.log("From second promise: " + res)
 }).catch(err => console.log(err));

