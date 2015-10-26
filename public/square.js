function Square(content) {
  this.domElement = document.createElement('div');
  this.domElement.className = 'square';
  this.domElement.style.width = this.SIZE + 'px';
  this.domElement.style.height = this.SIZE + 'px';
  this.domElement.style.background = 'url(./img/ground.png)';
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
