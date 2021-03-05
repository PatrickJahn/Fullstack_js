const { default: fetch } = require("node-fetch");
var now = require("performance-now")

const URL = "https://swapi.dev/api/people/";
 
function fetchPerson(url){

   return fetch(url).then(res => res.json())

}
async function printNamesSerial() {
  const start = now()
  console.log("Before");
  const person1 = await fetchPerson(URL+'1');
  const person2 = await fetchPerson(URL+'2');
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
  const end = now()
  console.log((end-start).toFixed(3), "Serial")
}
async function printNamesParallel() {
  const start = now()
  console.log("Before");
  const promise1 =  fetchPerson(URL+'1');
  const promise2 =  fetchPerson(URL+'2');
  const person1 = await promise1
  const person2 = await promise2
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
  const end = now()
  console.log((end-start).toFixed(3), "Parallel")
}

printNamesSerial()
printNamesParallel()