const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.buttons');
//console.log(btns[0].classList.length);
//console.log(btns[1].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red'))
// {
//     console.log('red'); 
// }

btns[0].addEventListener('click', ()=>{
    // if (!btns[1].classList.contains('red'))
    // {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

//console.log(btns[0].className);
wrapper.addEventListener('click', (event) =>{
    if(event.target && event.target.tagName == "BUTTON"){//Tagname таргета является именем таргета , только в верхнем регистре
        console.log('HELLO');
    }
})
