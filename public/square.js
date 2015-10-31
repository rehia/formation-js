function Square(content) {
  this.domElement = document.createElement('div');
  this.domElement.className = 'square';
  this.domElement.style.width = this.SIZE + 'px';
  this.domElement.style.height = this.SIZE + 'px';
  this.domElement.style.background = 'url(./img/ground.png)';
  this.domElement.style.position = 'relative';
  if (content) {
    this.attachTo(content);
  }
}

Square.prototype.SIZE = 70;

Square.prototype.attachTo = function(element) {
  element.appendChild(this.domElement);
};

Square.prototype.setPosition = function(x, y) {
  this.domElement.style.position = 'absolute';
  this.domElement.style.top = (this.SIZE * x) + 'px';
  this.domElement.style.left = (this.SIZE * y) + 'px';
};

Square.prototype.put = function(vegetable) {
  this.domElement.appendChild(vegetable.domElement);
  vegetable.domElement.style.left = ((this.SIZE - vegetable.WIDTH) / 2) + 'px';
  vegetable.domElement.style.bottom = ((this.SIZE - vegetable.HEIGHT) / 2) + 'px';
};
