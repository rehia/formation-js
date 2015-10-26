/* global Square */
function Grid(width, height, content) {
  this.domElement = document.createElement('div');
  this.domElement.className = 'grid';
  this.width = width;
  this.height = height;
  this.domElement.style.width = (Square.prototype.SIZE * this.width) + 'px';
  this.domElement.style.height = (Square.prototype.SIZE * this.height) + 'px';
  this.domElement.style.position = 'relative';

  if(content){
    this.attachTo(content);
  }
  this.matrix = [];
  for(var x=0; x<this.width; x++){
    this.matrix[x] = [];
    for(var y=0; y<this.width; y++){
      var square = new Square(this.domElement);
      square.setPosition(x, y);
      this.matrix[x][y] = square;
    }
  }
}

Grid.prototype.attachTo = function(element) {
  element.appendChild(this.domElement); 
};
