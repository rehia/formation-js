/* global popup */
function Square(content) {
  this.$el = $(document.createElement('div'));
  this.$el.addClass('square');
  this.$el.css({
    width: this.SIZE + 'px',
    height: this.SIZE + 'px',
    background: 'url(./img/ground.png)',
    position: 'relative'
  });
  this.unfocus();
  this.vegetable = null;
  if (content) {
    this.attachTo(content);
  }
  this.$el.click(function() {
    popup.close();
    if (!this.vegetable) {
      popup.openOn(this);
    }
  }.bind(this));

  this.$el.on('vegetableReady', function() {
    this.clear();
  }.bind(this));
}

Square.prototype.SIZE = 70;

Square.prototype.attachTo = function($element) {
  $element.append(this.$el);
};

Square.prototype.setPosition = function(x, y) {
  this.$el.css({
    position: 'absolute',
    top: this.SIZE * x,
    left: this.SIZE * y
  });
};

Square.prototype.put = function(vegetable) {
  this.append(vegetable.$el);
  this.vegetable = vegetable;
  vegetable.$el.css({
    left: (this.SIZE - vegetable.WIDTH) / 2,
    bottom: (this.SIZE - vegetable.HEIGHT) / 2
  });
};

Square.prototype.append = function($element) {
  this.$el.append($element);
};

Square.prototype.clear = function() {
  this.vegetable = null;
  this.$el.empty();
};

Square.prototype.focus = function() {
  this.$el.css({
    'z-index': 2,
    outline: '2px solid yellow'
  });
};

Square.prototype.unfocus = function() {
  this.$el.css({
    'z-index': 1,
    outline: '0px solid yellow'
  });
};
