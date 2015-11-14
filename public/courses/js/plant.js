function Plant() {
  if (typeof this.MAX_GROW_STATE !== 'number') {
    throw new Error('MAX_GROW_STATE not implemented');
  }

  //TODO: create dom element
  //this.domElement = ...

  //TODO: set domElement style
  //width
  //height
  //background: use this.getImagePath()
  //position
  
  //TODO: initialize grow state to 0

  //TODO: bind this.grow on click
}

Plant.prototype.getImagePath = function(){
  return '???'; //use this.TYPE to build image path
};

Plant.prototype.grow = function(e) {

  //TODO: stop event propagation

  //TODO:
  //if growing state is not at the max level, grow again
  //otherwise dispatch `vegetableReady` event 
};

Plant.prototype.setGrowingState = function(state) {
  this._growState = state; //save value

  //TODO: 
  //define scale according to state and MAX_GROW_STATE;
  var scale = 1; //
  this.domElement.style.transform = 'scale(' + scale + ')';
};

