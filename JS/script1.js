window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() { //скрываем табы
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    //Timer
    const deadline = '2021-04-20';

    function getTimeRemaining(endtime) { // разница между deadline и текущим временем
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t, //созлдаем объект
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();


        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
    // Modal

    const conn = document.querySelectorAll('[data-modal]'),
        panelka = document.querySelector('.modal'),
        name = document.querySelectorAll('.name').input,
        phone = document.querySelectorAll('.phone').input,
        cdata = document.querySelectorAll('.order__title'),
        close = document.querySelector('[data-close]'),
        btn = document.querySelector(".btn");

    conn.forEach(btn => {
        btn.addEventListener('click', () => {
            panelka.classList.add('show');
            panelka.classList.remove('hide');

            document.body.style.overflow = 'hidden'; //блокирует прокрутку страницы
        });
    });

    function closepanelka(){
        panelka.classList.add('hide');
        panelka.classList.remove('show');

        document.body.style.overflow = ''; //разблокирует прокрутку страницы
    }
    close.addEventListener('click', closepanelka);
    

    panelka.addEventListener('click', (e) => {
        if (e.target === panelka) {
            closepanelka();
        }
    });

  document.addEventListener('keydown', (e)=>{
      if(e.code === 'Escape' && panelka.classList.contains('show')){
          closepanelka();
      }

  });

});window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() { //скрываем табы
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    //Timer
    const deadline = '2021-04-20';

    function getTimeRemaining(endtime) { // разница между deadline и текущим временем
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t, //созлдаем объект
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds

        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();


        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);
    // Modal

    const conn = document.querySelectorAll('[data-modal]'),
        panelka = document.querySelector('.modal'),
        name = document.querySelectorAll('.name').input,
        phone = document.querySelectorAll('.phone').input,
        cdata = document.querySelectorAll('.order__title'),
        close = document.querySelector('[data-close]'),
        btn = document.querySelector(".btn");

    conn.forEach(btn => {
        btn.addEventListener('click', () => {
            panelka.classList.add('show');
            panelka.classList.remove('hide');

            document.body.style.overflow = 'hidden'; //блокирует прокрутку страницы
        });
    });

    function closepanelka(){
        panelka.classList.add('hide');
        panelka.classList.remove('show');

        document.body.style.overflow = ''; //разблокирует прокрутку страницы
    }
    close.addEventListener('click', closepanelka);
    

    panelka.addEventListener('click', (e) => {
        if (e.target === panelka) {
            closepanelka();
        }
    });

  document.addEventListener('keydown', (e)=>{
      if(e.code === 'Escape' && panelka.classList.contains('show')){
          closepanelka();
      }

  });

});