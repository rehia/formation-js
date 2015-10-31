function Plant() {
  this.domElement = document.createElement('div');
  this.domElement.style.width = this.WIDTH + 'px';
  this.domElement.style.height = this.HEIGHT + 'px';
  this.domElement.style.position = 'absolute';
  this.domElement.style.background = 'url(./img/' + this.IMG + '.png)';
  this.setGrowingState(0);
}

Plant.prototype.grow = function() {
  if (this.growState < this.MAX_GROW_STATE) {
    this.setGrowingState(this._growState + 1);
  }
};

Plant.prototype.setGrowingState = function(state) {
  this._growState = state;
  var scale = 0.5 + 0.5 * state / this.MAX_GROW_STATE;
  this.domElement.style.transform = 'scale(' + scale + ')';
};

Plant.prototype.MAX_GROW_STATE = 4;
