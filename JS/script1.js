
'use strict';

// To String

// 1) 
console.log(typeof(String(143)));
// 2)
console.log(typeof(5+ ''));

const num = 5;

console.log(`https://vk.com/catalog/${num}` );

const fornSize = 26 + 'px';

// To Number
//1)
console.log(typeof(Number('4')));

//2)

console.log(typeof(+'4'));

//3)
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");

// To boolean

//0, '', null , undefined, NaN; все эти ребята превращаются в falls в типе boolean

let switcher = null;

if (switcher)
{
   console.log('Working...');
}

switcher = 1;

if (switcher)
{
   console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

//3)
 console.log(typeof(!!"44444"));
 
