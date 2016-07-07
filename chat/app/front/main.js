var $ = require('jquery');

$(document).ready(function() {

  var $input = $('#message');

  $('#chatbox').on('submit', function(event){
    event.preventDefault();
    var message = $input.val();

    $input.val('');

  });

});
