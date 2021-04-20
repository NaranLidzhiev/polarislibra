const box = document.querySelector('.box');

box.addEventListener('click', ()=>{
    box.style.height = box.scrollHeight + 'px';
});
console.log("показ контента это wmd");