'use strict';

var RestifyServer = require('./RestifyServer');
var Fields = require('./Fields');

var fields = new Fields();
var hostname = 'localhost';
var port = 8082;

var restifyServer = new RestifyServer(fields, hostname, port);
restifyServer.setUp();
