/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
       border: 'black',
       bg: 'red'
    }
}
//console.log(options["colors"]["border"]);

// delete options.name;
// console.log(options);

for (let key in options)
{
   if (typeof(options[key]) === 'object')
   {
      for (let i in options[key])
      {
         console.log( `Свойство ${key} имеет значение ${options[key][i]}`);
      }
   } else  {console.log( `Свойство ${key} имеет значение ${options[key]}`);}
}