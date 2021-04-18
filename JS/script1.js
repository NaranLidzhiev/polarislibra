const timerId = setTimeout(logger, 2000);

clearInterval(timerId);

function logger (){
    console.log('text');
}

