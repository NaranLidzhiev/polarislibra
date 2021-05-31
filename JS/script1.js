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
    const deadline = '2021-05-29';

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
        btn.addEventListener('click', openpanelka);
    });

    function openpanelka() {
        panelka.classList.add('show');
        panelka.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(panelkaTimerId);

    }

    function closepanelka() {
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

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && panelka.classList.contains('show')) {
            closepanelka();
        }

    });

    const panelkaTimerId = setTimeout(openpanelka, 5000);

    function showPanelkaByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
            openpanelka();
            window.removeEventListener('scroll', showPanelkaByScroll);
        }
    }

    window.addEventListener('scroll', showPanelkaByScroll);

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.price = price;
            this.transfer = 27;
            this.parent = document.querySelector(parentSelector);
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.lenght === '') {
                this.classes = 'menu__item';
                element.classList.add(this.classes);

            } else {
                this.classes.forEach((classname) => element.classList.add = classname)
            }
            element.innerHTML = `
            <div class = menu__item>
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> руб/день
                </div>`
            this.parent.append(element);

        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        618,
        '.menu .container',
        '.menu__item'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        1718,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        1113,
        '.menu .container',
        '.menu__item'
    ).render();

    //Forms
    const message = {
        success: 'Спасибо! Мы с вами свяжемся',
        failure: 'Что-то пошло не так',
        loading: 'загрузка'
    };


    const forms = document.querySelectorAll('form');

    forms.forEach((item) => {
        postdata(item);
    });


    function postdata(form) {
        form.addEventListener('load', (e) => {

            const statusMessage = document.createElement('div');
            statusMessage.append('form');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            e.preventDefault();
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            //request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);
            request.send(formData);
            if (request.status === 200) {
                console.log(request.response);
                statusMessage.textContent = message.success;
                form.reset();
                setTimeout(() => {
                    statusMessage.remove();
                }, 2000);
            } else {
                statusMessage.textContent = message.failure;
            }
        });
    }
});