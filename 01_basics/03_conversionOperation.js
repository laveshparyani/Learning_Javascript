// let score = "33"
// let score = "33abc"               // Not a pure number
// let score = null
// let score = undefined
// let score = true
let score = "Lavesh"                // string that cannot be converted into a number

console.log(typeof score);          // string, string, object, undefined, boolean, string
console.log(typeof (score));        // string, string, object, undefined, boolean, string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // Type is number, number, number, number, number, number
console.log(valueInNumber);         // 33, NaN (Not a Number), 0, NaN, 1, NaN

// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0


// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "Lavesh"
console.log(typeof isLoggedIn);             // number, string, string
console.log(isLoggedIn);                    // 1, , Lavesh

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);      // boolean, boolean, boolean
console.log(booleanIsLoggedIn);             // true, false, true

// Empty string converted to boolean is false
// "" -> false
// "Lavesh" -> true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)