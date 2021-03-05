

function reverseArr<T>(arr: T[]){

        let reversed = arr.reverse()
        return reversed
}

console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));

class DataHolder<T>{
    private val: T
    constructor(val: T){
        this.val = val
    }

    get value(): T {
        return this.val
    }

    set value(value:T){
        this.val = value
    }

}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "world"
console.log(d.value);

let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
