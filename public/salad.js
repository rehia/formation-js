/* global Plant */
function Salad(){
  Plant.call(this);
}

Salad.prototype = Object.create(Plant.prototype);

Salad.prototype.WIDTH = 60; 
Salad.prototype.HEIGHT = 43; 
Salad.prototype.IMG = 'salad';


