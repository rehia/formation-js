function Plant() {
  if(typeof this.MAX_GROW_STATE !== 'number'){
    throw new Error('MAX_GROW_STATE not implemented');
  }
  this.domElement = document.createElement('div');
  this.domElement.style.transition = 'transform 0.3s';
  this.domElement.style.width = this.WIDTH + 'px';
  this.domElement.style.height = this.HEIGHT + 'px';
  this.domElement.style.position = 'absolute';
  this.domElement.style.background = 'url(./img/' + this.IMG + '.png)';
  this.setGrowingState(0);
  this.domElement.onclick = this.grow.bind(this);
}

Plant.prototype.grow = function() {
  if (this._growState < this.MAX_GROW_STATE) {
    this.setGrowingState(this._growState + 1);
  }
};

Plant.prototype.setGrowingState = function(state) {
  this._growState = state;
  var scale = 0.5 + 0.5 * state / this.MAX_GROW_STATE;
  console.log(scale);
  this.domElement.style.transform = 'scale(' + scale + ')';
};

