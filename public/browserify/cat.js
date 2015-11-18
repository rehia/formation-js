var Animal = require('./animal');

function Cat(){
  Animal.call(this);
}

Cat.prototype.noise = 'meooow';

module.exports = Cat;
