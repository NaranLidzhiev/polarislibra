/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

const arr = [21, 9, 3, 6, 8];
arr.sort(compareNum);//сортировка цифр по порядку 
console.log(arr);

function compareNum( a, b)// функция требуется для правильной сортировки
{
   return a -b;  
}
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr){
     console.log(`${i}: ${item} внутри массива ${arr}`)  ;
}
);

const str = prompt("", "");
const products = str.split(", ");
products.sort(); // сортировка по порядку букв
console.log(products.join('; '));









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