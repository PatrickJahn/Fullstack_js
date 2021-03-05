"use strict";
function reverseArr(arr) {
    var reversed = arr.reverse();
    return reversed;
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
var DataHolder = /** @class */ (function () {
    function DataHolder(val) {
        this.val = val;
    }
    Object.defineProperty(DataHolder.prototype, "value", {
        get: function () {
            return this.val;
        },
        set: function (value) {
            this.val = value;
        },
        enumerable: false,
        configurable: true
    });
    return DataHolder;
}());
var d = new DataHolder("Hello");
console.log(d.value);
d.value = "world";
console.log(d.value);
var d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
//# sourceMappingURL=generics.js.map