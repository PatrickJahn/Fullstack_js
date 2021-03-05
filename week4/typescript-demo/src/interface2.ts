
// Function types 

interface myFunc {
    //describing function,
    //parameters are in left side parenthesis,
    //right side 'string' is return type
    (first:string, second:string, third:string) : string[]
}

let f1: myFunc = function(str1, str2, str3): string[] {
        let arr = [str1.toUpperCase(),str2.toUpperCase(), str3.toUpperCase()]
    return arr
}

let f2 = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}
f2(f1)
//console.log(f1("Hello", "World", "!"))