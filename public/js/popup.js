/* global Corn, Carrot, Salad */

var VEGETABLES = [Salad, Corn, Carrot];

//Static popup
var popup = (function() {

  var currentSquare = null;
  var $element = $(document.createElement('div'));
  $element.addClass('popup');

  VEGETABLES.forEach(function(Vegetable) {
    var $img = $(new Image());
    $img.attr('src', '/img/' + Vegetable.prototype.TYPE + '.png');
    $element.append($img);
    $img.click(function() {
      if (currentSquare) {
        currentSquare.put(new Vegetable());
      }
    });
  });

  var $closeButton = $(document.createElement('span'));
  $closeButton.addClass('close');
  $closeButton.text('x');
  $closeButton.click(function(e){
    e.stopPropagation();
    close();
  });
  $element.append($closeButton);

  function openOn(square) {
    $element.css('display', 'block');
    square.$el.append($element);
    square.focus();
    currentSquare = square;
  }

  function close() {
    if (currentSquare) {
      currentSquare.unfocus();
      currentSquare = null;
    }
    $element.css('display', 'none');
  }

  return {
    openOn: openOn,
    close: close
  };
})();

window.popup = popup;
