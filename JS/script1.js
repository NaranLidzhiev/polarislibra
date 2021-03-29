/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let str = "some";
let strObj = new String(str);
 
console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
   health: 400,
   armor:100,
   sayHello: function ()
   {
      console.log("Hello");
   }
};

const jonh = {
   health: 100,
};

// jonh.__proto__ = soldier;
 Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();
