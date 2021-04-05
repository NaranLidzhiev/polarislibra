/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const add = document.querySelectorAll('.promo__adv img'),
    movieList = document.querySelector('.promo__interactive-list'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector(".promo__genre"),
    films = document.getElementsByClassName("promo__interactive-item");


add.forEach(item => {
    item.remove();
});
movieList.innerHTML = "";
genre.textContent = 'Драма';
for (let i = 0; i < films.length; i++) {
    films[i].after(i + 1);
}

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += ` 
    <li class="promo__interactive-item">${i +1} ${film}
    <div class="delete"></div>
    </li>
    `;
});