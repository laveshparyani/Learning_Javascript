"use strict"    // Treat all JS code as newer version

// alert(3 + 3) //We are using nodejs, not browser

// No Code Readability, hence bad practice
// console.log(2 
//     + 2); console.log("Hello Lavesh!")

// Code readability should be high
console.log(3 + 3)
console.log("Hello User!")

// Data Types
let name = "Lavesh"     //String
let age = 18            //Number
let isLoggedIn = false  //Boolean

// number -> 2 to power 53 (Range)
// bigint -> Used for applications like Trading, StockMarket, Reddit, Facebook
// string -> "" or '' (Prefer "")
// boolean -> True/False

// null 
// -> Standalone Value
// -> Represntation of empty value
// -> Special type and can be assigned [let state = null]

// undefined -> Variable declared, but no value assigned [let state;]

// symbol -> Unique (To define uniqueness)[Will be used in react to define uniqueness of components and is also used in tools like Figma]
// object

console.log(typeof "Lavesh");
console.log(typeof "age");
console.log(typeof null);       // null is a object
console.log(typeof undefined);  // undefined is a type