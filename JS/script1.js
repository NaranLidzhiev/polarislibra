const persone = {
    name: 'Alex',
    tel: '+79054091119',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clon = JSON.parse(JSON.stringify(persone));//создаем глубокую копию которая абсолютно не зависит от persone 
clon.parents.mom = 'Ann';
persone.parents.mom = 'Ann';
console.log(persone);
console.log(clon);
