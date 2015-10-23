'use strict';

var restify = require('restify');

var Fields = require('./Fields');

var server = restify.createServer({
  name: 'localhost'
});

server.use(restify.bodyParser());
server.use(restify.queryParser());

var fields = new Fields();

server.get('/fields/:id', function (request, response, next) {
  try {
    response.send(fields.getField(request.params.id));
    return next();
  } catch(error) {
    return next(new restify.ResourceNotFoundError(error.message));
  }
});

server.post('/fields', function (request, response, next) {
  var id = fields.newField(request.params.state);
  response.send(id);
  next();
});

server.put('/fields/:id', function (request, response, next) {
  try {
    fields.updateField(request.params.id, request.params.state);
    response.end();
    return next();
  } catch(error) {
    return next(new restify.ResourceNotFoundError(error.message));
  }
});

var port = 8082;

server.listen(port);

console.log('Server listening on port ' + port);
