"use strict";
function greet() {
    console.log("Hello!");
}
const result = greet(); // Hợp lệ
console.log(result); // Output: undefined
function throwError(message) 
    throw new Error(message);
function infiniteLoop() {
    while (true) {
        console.log("This is an infinite loop!");
    }
}