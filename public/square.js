/* global popup */
function Square(content) {
  this.domElement = document.createElement('div');
  this.domElement.className = 'square';
  this.domElement.style.width = this.SIZE + 'px';
  this.domElement.style.height = this.SIZE + 'px';
  this.domElement.style.background = 'url(./img/ground.png)';
  this.domElement.style.position = 'relative';
  this.unfocus();
  this.vegetable = null;
  if (content) {
    this.attachTo(content);
  }
  this.domElement.onclick = function() {
    popup.close();
    if (!this.vegetable) {
      popup.openOn(this);
    }
  }.bind(this);

  this.domElement.addEventListener('vegetableReady', function(){
    this.clear();
  }.bind(this));
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
  this.vegetable = vegetable;
  vegetable.domElement.style.left = ((this.SIZE - vegetable.WIDTH) / 2) + 'px';
  vegetable.domElement.style.bottom = ((this.SIZE - vegetable.HEIGHT) / 2) + 'px';
};

Square.prototype.clear = function() {
  this.vegetable = null;  
  this.domElement.innerHTML = '';
};

Square.prototype.focus = function() {
  this.domElement.style.zIndex = 2;
  this.domElement.style.outline = '2px solid yellow';
};

Square.prototype.unfocus = function() {
  this.domElement.style.zIndex = 1;
  this.domElement.style.outline = '0px solid yellow';
};
