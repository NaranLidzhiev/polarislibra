'use strict'

const obj = {
  a:20,
  b:15,
  sum: function () {
      console.log(this);
  }
};
obj.sum();