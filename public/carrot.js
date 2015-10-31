/* global Plant */
function Carrot(){
  Plant.call(this);
}

Carrot.prototype = Object.create(Plant.prototype);

Carrot.prototype.WIDTH = 65; 
Carrot.prototype.HEIGHT = 28; 
Carrot.prototype.IMG = 'carrot';
Carrot.prototype.MAX_GROW_STATE = 6;


