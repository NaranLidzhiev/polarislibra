'use strict'

// const obj = {
//   a:20,
//   b:15,
//   sum: function () {
//       console.log(this);
//       function lapaka(){
//           console.log(this);//выводит undefined тк lapaka простая функция 
//       }
//   }
// };
// obj.sum();

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.Human = true;
//     this.hello = function(){
//         console.log(`Hello ${name}`);
//     };
// }

// let  ivan = new User('Ivan', '18');//this в конструкторах и классах это новый экземпляр объекта

function count( num){
     return this*num;
}

const double = count.bind(2);//создаем объект double и присваиваем count контекст this в значении bind = 2
console.log(double(89));