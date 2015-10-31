/* global Plant */
function Corn(){
  Plant.call(this);
}

Corn.prototype = Object.create(Plant.prototype);

Corn.prototype.WIDTH = 70; 
Corn.prototype.HEIGHT = 70; 
Corn.prototype.IMG = 'corn';
Corn.prototype.MAX_GROW_STATE = 4;


