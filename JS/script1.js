const persone = {
    name: 'Alex',
    tel: '+79054091119',
};

console.log(JSON.stringify(persone));//переводим persone в JSON формат
console.log(JSON.parse(JSON.stringify(persone)));//переводим persone в формате  JSON в обычный формат
