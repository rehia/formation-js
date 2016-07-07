'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('new socket...');
  const users = {};
  socket.on('chat message', message => {
    const chatMessage = JSON.parse(message);
    if (chatMessage.to && users[chatMessage.to]) {
      users[chatMessage.to].emit(message);
    } else {
      io.emit('chat message', message);
    }
  });

  socket.on('check in', message => {
    const name = JSON.parse(message).name;
    users[name] = socket;
  });

  socket.on('check out', message => {
    const name = JSON.parse(message).name;
    delete users[name];
  });
});

// listen on the port of your choice
http.listen(1346, () => {
  console.log('chat server started! listening on port 1346...');
});