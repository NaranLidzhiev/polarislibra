/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

if (4 == 9) {
    console.log("that's good")
} else {
    console.log("that's  bad(")
}

let maybe = 9;
if (maybe % 2 == 0) {
    console.log(maybe / 2)
} else
if (maybe > 10) {
    maybe = maybe - 1;
    console.log(maybe / 2);
} else {
    console.log(maybe * 2138);
}
let num = 50;
(num === 50) ? console.log("that's right"): console.log("bad things happens");
switch (num){
    case 49: console.log("Тепло") ;
    break;
    case 121: console.log("Холодно");
    break;
    case 69: console.log("Правильно!");
    break;
    default:
        console.log("Вообще куда-то не туда")
}
