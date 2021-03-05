"use strict";
// Function types 
var f1 = function (str1, str2, str3) {
    var arr = [str1.toUpperCase(), str2.toUpperCase(), str3.toUpperCase()];
    return arr;
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(f1);
//console.log(f1("Hello", "World", "!"))
//# sourceMappingURL=interface2.js.map