const box = document.querySelector('.box');

box.addEventListener('click', ()=>{
    box.style.height = box.scrollHeight + 'px';
});
console.log("показ контента это wmd");

console.log(box.getBoundingClientRect);// получение всех координатов, начиная от верхнего правого угла

const style = window.getComputedStyle(box);//получаем стиль box
console.log(style);
console.log(style.display);


console.log(document.documentElement.clientWidth);//document element при такой работе необходим