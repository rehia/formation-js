/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var crypto = require('crypto');
var sha1 = function (value) {
  return crypto
    .createHash('sha1')
    .update(value)
    .digest('hex');
};

var ___ = 'probably wrong answer';

describe('JS Functions', function () {

  it('function expressions vs function declarations', function () {
    function isNimble() { return false; }
    var canFly = function () { return false; };
    this.isDeadly = function () { return false; };

    assert.isTrue(isNimble(), 'isNimble should be callable');
    assert.isTrue(canFly(), 'canFly as well');
    assert.isTrue(this.isDeadly(), 'and so isDeadly');
  });

  it('a function can be declared after being called, but not function expressions', function () {
    assert.isTrue(isNimble(), 'isNimble can be called before being declared');
    assert.isTrue(canFly(), 'but not canFly');
    assert.isTrue(this.isDeadly(), 'nor isDeadly');

    function isNimble() { return ___; }
    var canFly = function () { return true; };
    this.isDeadly = function () { return true; };
  });

  it('a function can be refered within its self using its name', function () {
    function yell(n){
      return n > 0 ? yell(n-1) + "a" : "hiy";
    }
    assert.equal(yell(4), ___, "Calling the function by itself comes naturally." );
  });

  it('naming a function', function () {
    var ninja = function myNinja(){
      assert.equal(___, myNinja, "This function is named two things - at once!" );
    };
    ninja();
    assert.equal(typeof ___, "undefined", "But myNinja isn't defined outside of the function." );
  });

  it('function can be used by their name as an object property', function () {
    var ninja = {
      yell: function(n){
        return n > 0 ? ninja.yell(n-1) + "a" : "hiy";
      }
    };
    assert( ninja.yell(5) == ___, "A single object isn't too bad, either." );
  });

  it('a function should always have a proper name', function () {
    var ninja = {
      yell: function ___(n){
        return n > 0 ? ninja.yell(n-1) + "a" : "hiy";
      }
    };

    var samurai = { yell: ninja.yell };
    var ninja = null;


    assert.doesNotThrow(function () {
      samurai.yell(4);
    }, Error, "Uh, this isn't good! Where'd ninja.yell go?");
  });

  it('a function is also an object, and can have properties', function () {
    var obj = {};
    var fn = function(){};
    obj.prop = "some value";
    ___.prop = "some value";
    assert.equal(fn.___, obj.prop, "Both are objects, both have the property." );
  });

  it('we can cache function results using its own properties', function () {
    function hash(value) {
      // implement cache somewhere here
      return sha1(value).substr(0, 7);
    }
    hash.cache = {};

    assert.equal(___, hash("hello, world!"), 'the method executes itself');
    assert.equal('1f09d30', hash.cache["hello, world!"], 'and caches the results using own property');
  });

  afterEach(function () {
    delete this.isDeadly;
  });
});