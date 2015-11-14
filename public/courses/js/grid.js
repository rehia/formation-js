/* global Square, Salad, Carrot, Corn */
function Grid(width, height, content) {
  //TODO: create thid.domElement
  
  //TODO: add class 'grid';
  
  this.width = width;
  this.height = height;

  //TODO: set style properties
  //position relative in order to place square with absolute positioning
  //width & height based on square size and width/height

  if (content) {
    this.attachTo(content);
  }

  //TODO: 
  //generate a 2D matrix (this.matrix)
  //put a square in each cell
  //and set square position
    // -> implement square.setPosition(x, y)
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
    if (!item.type) {
      return;
    }
    var x = parseInt(key.split('-')[0]);
    var y = parseInt(key.split('-')[1]);
    var square = this.matrix[x][y];
    if (square.vegetable && !(square.vegetable instanceof VEGETABLE_MAP[item.type])) {
      square.clear();
    }
    if (!square.vegetable && item.type) {
      square.put(new VEGETABLE_MAP[item.type]());
    }
    square.vegetable.setGrowingState(item.state);
  }.bind(this));
};


Grid.prototype.export = function() {
  var data = {};
  for (var x = 0; x < this.width; x++) {
    for (var y = 0; y < this.width; y++) {
      var vegetable = this.matrix[x][y].vegetable;
      var square = {
        type: null,
        state: 0
      };
      if (vegetable) {
        square.type = vegetable.TYPE;
        square.state = vegetable._growState;
      }
      data[x + '-' + y] = square;
    }
  }
  return data;
};
