'use strict';

console.log('Проверка системы...');

const analize = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Получение данных...')
        const system = {
            energy: 21333242344,
            air: 3000000,
            atmospheresimulation: 'Earth atmosphere',
            strength: 2112124
        };
        if (system.energy< 23424){
            reject();
        }
        resolve(system);

    }, 2000);

});

analize.then((system)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(system);
            console.log('Все системы в норме...');
        }, 2000);
        setTimeout(()=>{
            console.log('Начинаю подсчет экипажа...');
            system.members = '90';
            resolve(system);
        }, 2000);
    });
}).then(data=>{
    console.log(`Количество экипажа ${data.members}`);
}).catch(()=>{
    console.log('Использую резервный генератор');
}).finally(()=>{
    console.log('Анализ систем завершен');
});

