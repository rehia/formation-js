/* jslint node: true */
"use strict";

var util = require('util');

function FieldDoesNotExistError(id) {
    Error.call(this);

    this.name = 'FieldDoesNotExistError';
    this.message = 'Field of id #' + id + ' does not exist.';
}

util.inherits(FieldDoesNotExistError, Error);

module.exports = FieldDoesNotExistError;