/* global popup */
function Square(content) {

  //TODO: create dom element
  //this.domElement = ...

  //TODO: add class square

  //TODO: set style properties:
  //width based on this.SIZE
  //height based on this.SIZE
  //background
  //position (relative for now)

  this.vegetable = null;

  if (content) {
    this.attachTo(content);
  }

  if (this.domElement && popup) {
    this.domElement.onclick = function() {
      popup.close();
      if (!this.vegetable) {
        popup.openOn(this);
      }
    }.bind(this);
  }

  //TODO: 
  //When listen for `vegetableReady` event, then clear the content
}

Square.prototype.SIZE = 70;

Square.prototype.attachTo = function(element) {
  //TODO:
  //append this.domElement to argument element
};

Square.prototype.setPosition = function(x, y) {
  //TODO: set positionning styles
  //switch position to absolute
  //set left based on x and this.SIZE
  //set top based on y and this.SIZE
};

Square.prototype.put = function(vegetable) {
  //TODO:
  //Append vegetable's element to the square domElement
  this.vegetable = vegetable;
  //TODO:
  //edit vegetable element's style properties to replace it
  //at the center of the square according to his own size
};

Square.prototype.clear = function() {
  this.vegetable = null;
  //TODO:
  //remove dom
};

Square.prototype.focus = function() {
  this.domElement.style.zIndex = 2;
  this.domElement.style.outline = '2px solid yellow';
};

Square.prototype.unfocus = function() {
  this.domElement.style.zIndex = 1;
  this.domElement.style.outline = '0px solid yellow';
};
