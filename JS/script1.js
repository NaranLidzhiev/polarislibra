/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// const n = +prompt("Сколько фильмов вы просмотрели", "");
// let a =[];
//  for (let i =0; i< n ; i ++)
//  {
//       a[i] = prompt("фильм ", "" )
//       if ((a[i]  == "")  || (a[i] =="cancel"))
//       {
//          console.log("так нельзя ") ;
//          break;
//       }
//  }


// Код возьмите из предыдущего домашнего задания


'use strict';
const numberofFilms = +prompt("сколько фильмов вы уже просмотрели?");

const personalMovieDB = {
   count: numberofFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false

};



for (let i = 0; i < 2; i++) {
   const a = prompt('Один из последних просмотренных фильмов', ''),
         b = +prompt('На сколько оцените его ?', '');
   
   if ( a != null && b != null && a != '' && b != '' && a.length < 50)
   {
      personalMovieDB.movies[a] = b;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
}
if (personalMovieDB.count<10)
{
   console.log("Просмотрено удивительно малое количество фильмов ") ;
}
else 
if (personalMovieDB.count<30 && personalMovieDB.count > 10)
{
   console.log("Вы средний класс ") ;
}
else
if (personalMovieDB.count>30)
{
   console.log("Вы задрот ") ;
}

 
console.log(personalMovieDB);