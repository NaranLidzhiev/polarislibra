"use strict";

let num = 20;

function showFirstMessage(text) {
   console.log(text);
   console.log(num);
}
const b = "lucky17";
showFirstMessage(b);
console.log(num);

function calc(a, b) {
   return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
   let num = 50;
   return num;
}
ret();
num = 90 + 3;
console.log(num);


const logger = function () {
   console.log("Hello");
};

logger();
const clc = (a,b ) =>  { return a + b} ;
console.log(clc(4,5)); 