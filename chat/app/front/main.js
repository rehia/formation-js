var $ = require('jquery');
var io = require('socket.io-client');
var Sender = require('./sender');

$(document).ready(function() {

  var socket = io('http://localhost:1346');
  var sender = new Sender(socket);
  var $input = $('#message');

  $('#chatbox').on('submit', function(event){
    event.preventDefault();
    var message = $input.val();
    sender.sendMessageToAllUsers(message);
    $input.val('');
  });
  
  socket.on('chat message', function (message) {
    var chatMessage = JSON.parse(message);
    $('#messages').append($('<li>').text(chatMessage.message));
  });

});
