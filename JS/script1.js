/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
function first()
{
   // Do something
   setTimeout(function()
   {
      console.log(1);
   }, 500)

}

function second ()
{
   console.log(2);
}

first()
second()

function learnJS(lang, callback)
{
   console.log(`я учу: ${lang}`)
   callback();
}

function done()
{
   console.log('я прошел этот урок!');
}

learnJS('JavaScript', done);
