/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// let a = 5,
//    b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//    a: 5,
//    b: 1
// };

// const copy = obj; передача по ссылке

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) // функция копирования объекта
{
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }
   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
}

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add ={
   d:17,
   e:20
}


const clone = Object.assign({}, add);

clone.d = 20;
// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'алфавит учишь чтоль';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livej', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; //...video, ... blogs - таким образом мы вставляем содержание массивов video  и blogs  в массив internet

console.log(internet);










// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);

// for (let i =0; i < arr.length; i++)
// {
//    console.log(arr[i]);
// }

// for (let value of arr)
// {
//    console.log(value);
//    //Этот цикл записывает поочередно 
//    //элементы arr в значение value
// }


//console.log(options["colors"]["border"]);

// delete options.name;
// console.log(options);
// let counter =0;
// for (let key in options)
// {
//    if (typeof(options[key]) === 'object')
//    {
//       for (let i in options[key])
//       {
//          console.log( `Свойство ${key} имеет значение ${options[key][i]}`);
//          counter++
//       }
//    } else  {console.log( `Свойство ${key} имеет значение ${options[key]}`); counter++;}

// }