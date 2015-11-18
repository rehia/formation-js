var Animal = require('./animal');

function Duck(){
  Animal.call(this);
}

Duck.prototype.noise = 'coin coin';

module.exports = Duck;
