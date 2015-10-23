/* jslint node: true */
"use strict";

var crypto = require('crypto');
var FieldDoesNotExistError = require('./FieldDoesNotExistError');

function Fields() {}

Fields.prototype.newField = function newField(state) {
  var id = this._newId();
  this[id] = state;
  return id;
};

Fields.prototype.updateField = function updateField(id, state) {
  if (!this[id]) {
    throw new FieldDoesNotExistError(id);
  }

  console.log('updating field');
  this[id] = state;
};

Fields.prototype.getField = function getField(id) {
  if (!this[id]) {
    throw new FieldDoesNotExistError(id);
  }

  return this[id];
};

Fields.prototype._newId = function _newId() {
  do {
    var date = new Date().toISOString();
    var id = crypto.createHash('sha1').update(date).digest('hex').substr(0, 7);
  } while(this[id]);

  return id;
};

module.exports = Fields;