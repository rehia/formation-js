/* jslint node: true */
"use strict";

var restify = require('restify');

function RestifyServer(fields, hostname, port) {
  this.fields = fields;
  this.hostname = hostname;
  this.port = port;
}

RestifyServer.prototype.setUp = function setUp() {
  var server = restify.createServer({
    name: this.hostname
  });

  server.use(restify.bodyParser());
  server.use(restify.queryParser());
  server.use(restify.CORS());

  server.get('/fields/:id', function (request, response, next) {
    try {
      response.send(this.fields.getField(request.params.id));
      return next();
    } catch(error) {
      return next(new restify.ResourceNotFoundError(error.message));
    }
  }.bind(this));

  server.post('/fields', function (request, response, next) {
    var id = this.fields.newField(request.params.state);
    response.send(id);
    next();
  }.bind(this));

  server.put('/fields/:id', function (request, response, next) {
    try {
      this.fields.updateField(request.params.id, request.params.state);
      response.end();
      return next();
    } catch(error) {
      return next(new restify.ResourceNotFoundError(error.message));
    }
  }.bind(this));

  server.listen(this.port);

  console.log('Server listening on port ' + this.port);
};

module.exports = RestifyServer;