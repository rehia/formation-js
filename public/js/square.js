/* global popup */
function Square(content) {
  this.$domElement = $('<div>');
  this.$domElement.addClass('square');
  this.$domElement.css('width', this.SIZE);
  this.$domElement.css('height', this.SIZE);
  this.$domElement.css('background', 'url(./img/ground.png)');
  this.$domElement.css('position', 'relative');

  this.unfocus();
  this.$vegetableElement = null;
  if (content) {
    this.attachTo(content);
  }
  this.$domElement.on('click', function() {
    popup.close();
    if (!this.$vegetableElement) {
      popup.openOn(this);
    }
  }.bind(this));

  this.$domElement.on('vegetableReady', function(){
    this.clear();
  }.bind(this));
}

Square.prototype.SIZE = 70;

Square.prototype.attachTo = function(element) {
  this.$domElement.appendTo(element);
};

Square.prototype.setPosition = function(x, y) {
  this.$domElement.css('position', 'absolute');
  this.$domElement.css('top', (this.SIZE * x));
  this.$domElement.css('left', (this.SIZE * y));
};

Square.prototype.put = function(vegetable) {
  this.vegetable = vegetable;
  this.$vegetableElement = $(vegetable.domElement);
  this.append(this.$vegetableElement);
  this.$vegetableElement.css('left', ((this.SIZE - vegetable.WIDTH) / 2));
  this.$vegetableElement.css('bottom', ((this.SIZE - vegetable.HEIGHT) / 2));
};

Square.prototype.append = function (element) {
  this.$domElement.append(element);
};

Square.prototype.clear = function() {
  this.vegetable = null;
  this.$vegetableElement = null;
  this.$domElement.empty();
};

Square.prototype.focus = function() {
  this.$domElement.css('z-index', 2);
  this.$domElement.css('outline', '2px solid yellow');
};

Square.prototype.unfocus = function() {
  this.$domElement.css('z-index', 1);
  this.$domElement.css('outline', '0px solid yellow');
};
