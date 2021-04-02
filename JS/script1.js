
'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i =0; i < hearts.length; i++)
{
    hearts[i].style.backgroundColor = 'aqua';
}

hearts.forEach(item => {
    item.style.backgroundColor ='maroon';
});

const div = document.createElement('div'); // создаем элемент только в js файле
//const text = document.createTextNode('Тут был я');

div.classList.add('black'); // придаем элементу класс со значением black

//wrapper.append(div);//после
wrapper.prepend(div);//до
//hearts[0].before(div);  вставка до определенного элемента
hearts[0].after(div); // вставка после определенного элемента

//circles[0].remove(); удаление элемента

hearts[0].replaceWith(circles[0]);
