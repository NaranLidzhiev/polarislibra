
'use strict';


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

const add = document.getElementsByClassName('promo__adv'),
      genre = document.querySelector(".promo__genre"),
      films = document.getElementsByClassName("promo__interactive-item"),
      bg = document.getElementById('promo__bg');
for (let i =0; i < add.length; i++)
{
    add[i].remove();
} 
genre.innerHTML = "Драма";

for (let i =0; i< films.length; i++ )
{
    films[i].after(i+1);
}

bg.style.backgroundImage ='url("img/bg.jpg")';
