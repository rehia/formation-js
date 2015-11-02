/* global Square */
function Grid(width, height, content) {
  this.domElement = document.createElement('div');
  this.domElement.className = 'grid';
  this.width = width;
  this.height = height;
  this.domElement.style.width = (Square.prototype.SIZE * this.width) + 'px';
  this.domElement.style.height = (Square.prototype.SIZE * this.height) + 'px';
  this.domElement.style.position = 'relative';

  if (content) {
    this.attachTo(content);
  }
  this.matrix = [];
  for (var x = 0; x < this.width; x++) {
    this.matrix[x] = [];
    for (var y = 0; y < this.width; y++) {
      var square = new Square(this.domElement);
      square.setPosition(x, y);
      this.matrix[x][y] = square;
    }
  }
}

var VEGETABLE_MAP = {
  'salad': Salad,
  'carrot': Carrot,
  'corn': Corn
};

Grid.prototype.attachTo = function(element) {
  element.appendChild(this.domElement);
};

Grid.prototype.populate = function(data) {
  Object.keys(data).forEach(function(key) {
    var item = data[key];
    var x = parseInt(key.split('-')[0]);
    var y = parseInt(key.split('-')[1]);
    var square = this.matrix[x][y];
    if (square.vegetable && !(square.vegetable instanceof VEGETABLE_MAP[item.type])) {
      square.clear();
    }
    if (!square.vegetable) {
      square.put(new VEGETABLE_MAP[item.type]);
    }
    square.vegetable.setGrowingState(item.step);
  }.bind(this));
};
