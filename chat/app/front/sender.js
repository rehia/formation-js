'use strict';

function Sender(socket) {
  this.socket = socket;
}

Sender.prototype.sendMessageToAllUsers = function sendMessageToAllUsers(message) {
  this.socket.emit('chat message', JSON.stringify({message: message}));
};

module.exports = Sender;