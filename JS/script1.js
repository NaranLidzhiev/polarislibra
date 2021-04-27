'use strict'

const obj = {
  a:20,
  b:15,
  sum: function () {
      console.log(this);
      function lapaka(){
          console.log(this);//выводит undefined тк lapaka простая функция 
      }
  }
};
obj.sum();