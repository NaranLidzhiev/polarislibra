/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let numberofFilms;

function start() {
   numberofFilms = +prompt("сколько фильмов вы уже просмотрели?", '');
   while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
      numberofFilms = +prompt("сколько фильмов вы уже просмотрели?", '');

   }
}
start();

const personalMovieDB = {
   count: numberofFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false

};

function remembermyfilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов', ''),
         b = +prompt('На сколько оцените его ?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

remembermyfilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено удивительно малое количество фильмов ");
   } else
   if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
      console.log("Вы средний класс ");
   } else
   if (personalMovieDB.count > 30) {
      console.log("Вы задрот ");
   }
}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden ) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(likes)
{
 for (let i =0; i < 3; i++)
 {
    likes[i]= prompt(`Ваш любимый жанр под номером ${i+1}` , '')
 }
}

writeYourGenres(personalMovieDB.genres);
