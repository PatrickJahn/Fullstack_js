

// a: implement a function: myFilter(array, callback)

let arr = [1, 2, 3, 4]

function myFilter(array, callback){

    var newArr = []
    for (var x = 0; x < array.length; x++ ){
      
        if (callback(array[x])) {
            newArr.push(array[x])
        }

    }

    return newArr
}

var callback =  (x) => {
    if (x > 2) {
        return true
    }
    return false
}

var newArr = myFilter(arr, callback)

console.log("MyFilter")
console.log(newArr)




// b: Implement a function: myMap(array, callback)
console.log("MyMap")
 var arr2 = [1, 2, 3, 4]
function myMap(array, callback){

    var newArr2 = []
    for (var x = 0; x < array.length; x++ ){
        newArr2.push(callback2(array[x]))
    }

    return newArr2
}

var callback2 = (x) => {
    return x * 2;
}

var newArr2 = myMap(arr2, callback2)

console.log(newArr2)


// c: Create a new version of the two functions (without the array argument) which you should add to the Array prototype property 

Array.prototype.myMap = function () { 
    var newArr2 = []
    for (var x = 0; x < this.length; x++ ){
        newArr2.push(callback2(this[x]))
    }

    return newArr2
}

   



let d = arr.myMap()
console.log(d)

// THE REDUCE METHOD 

console.log("REDUCE METHOD")
var all = ["Lars", "Peter", "Jan", "Bo"];
// a) Use join to create a single string from all, with names: comma-, space. and  # - separated.
let joinedAll = all.join(", #");
console.log(joinedAll)

// b) Given this array: var numbers = [2, 3, 67, 33]; 
var numbers = [2, 3, 67, 33]; 
var numberSum = numbers.reduce((total, n) => {return total +=n})
console.log("numbersSum: ",numberSum)

// c)  Given this array: -Create a reducer function that will return the average age of all members.
let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
  var reducer = function(total, member, index, arr) {
    if (index == 1){
        total = total.age
    }
        if (index == arr.length - 1){
            return (total += member.age) / arr.length
        }

        return total += member.age

  }

    var ageSum = members.reduce(reducer)
    console.log("ageSum: ",ageSum)


    // d) Imagine you were to create a system that could count votes for the presidential election in USA.

    var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

    var countet = votes.reduce((total, vote, index, arr) => {
        if (index == 1) {
                let t = total
                total = {}
                total[t] = 1
             }
           
             if (total[vote]){
               total[vote] += 1
             } else{
               total[vote] = 1
             }
             return total
    })

    console.log(countet)
