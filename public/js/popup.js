/* global Corn, Carrot, Salad */

var VEGETABLES = [Salad, Corn, Carrot];

//Static popup
var popup = (function() {

  var currentSquare = null;
  var $element = $('<div>');
  $element.addClass('popup');

  VEGETABLES.forEach(function(Vegetable) {
    var $img = $('<img>');
    $img.attr('src', '/img/' + Vegetable.prototype.TYPE + '.png');
    $element.append($img);
    $img.on('click', function() {
      if (currentSquare) {
        currentSquare.put(new Vegetable());
      }
    });
  });

  var $closeButton = $('<span>');
  $closeButton.addClass('close');
  $closeButton.append(document.createTextNode('x'));
  $closeButton.on('click', function(e){
    e.stopPropagation();
    close();
  });
  $element.append($closeButton);

  function openOn(square) {
    $element.show();
    square.append($element[0]);
    square.focus();
    currentSquare = square;
  }

  function close() {
    if (currentSquare) {
      currentSquare.unfocus();
      currentSquare = null;
    }
    $element.hide();
  }

  return {
    openOn: openOn,
    close: close
  };
})();

window.popup = popup;
