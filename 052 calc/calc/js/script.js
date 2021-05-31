'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current.json');//собирает настройки которые в будущем помогут сделать запрос 
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//описывает вид файла
  request.send();


  request.addEventListener('load', () =>{//если загрузится все то срабатаывает данный обработчик событий
    if ( request.status === 200 ){
        console.log(request.response);// получаем значение в виде JSON значения
        const data = JSON.parse(request.response); // парсим - переводим значение из JSON вида в обычный вид
        inputUsd.value = (+inputRub.value/ data.current.usd).toFixed(2);//переводим рубли в доллары toFixed округляет до 2 знаков после нуля
    } else {
        inputUsd.value = "Что-то пошло не так";
    }
  });

  // status - статус нашего запроса 404 306 502 и тд
  // statusText - текстовое описание ответа от сервера Ok Created Bad Gateway и тд
  // response ответ от сервера
  // readyState содержит текущее состояние нашего запроса
});