/* global Corn, Carrot, Salad */

var VEGETABLES = [Salad, Corn, Carrot];

//Static popup
var popup = (function() {

  var currentSquare = null;
  var element = document.createElement('div');
  element.className = 'popup';

  VEGETABLES.forEach(function(Vegetable) {
    var img = new Image();
    img.src = '/img/' + Vegetable.prototype.TYPE + '.png';
    element.appendChild(img);
    img.onclick = function() {
      if (currentSquare) {
        currentSquare.put(new Vegetable());
      }
    };
  });

  var closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.appendChild(document.createTextNode('x'));
  closeButton.onclick = function(e){
    e.stopPropagation();
    close();
  };
  element.appendChild(closeButton);

  function openOn(square) {
    element.style.display = 'block';
    square.domElement.appendChild(element);
    square.focus();
    currentSquare = square;
  }

  function close() {
    if (currentSquare) {
      currentSquare.unfocus();
      currentSquare = null;
    }
    element.style.display = 'none';
  }

  return {
    openOn: openOn,
    close: close
  };
})();

window.popup = popup;
