/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var EventEmitter = require('events').EventEmitter;
var ___ = 'probably wrong answer';

describe('JS Closures', function () {

  it('simple closure keeps its lexical scope state', function () {
    var num = 10;

    function add(myNum){
      return num + myNum;
    }

    assert.equal(add(5), 15, "Add two numbers together, one from a closure.");
  });

  it('lexical scope state can change before closure is used', function () {
    var num = 9;

    function add(myNum){
      return num + myNum;
    }

    num = 15;
    assert.equal(add(5), 20, "Add two numbers together, even after change");
  });

  it('closures are usually used as callbacks', function (done) {
    var emitter = new EventEmitter();
    var num = 4;

    function add(myNum){
      return num + myNum;
    }

    emitter.on('add', function () {
      assert.equal(add(7), 11, 'Call closure as a callback.');
      done();
    });

    emitter.emit('add');
  });

  it('closures can also be used as object properties', function () {
    var num = 8;
    var calculator = {
      add: function add(myNum) {
        var otherNum = 3;
        return num + myNum + otherNum;
      }
    };

    assert.equal(calculator.add(5), 16, 'closure as object properties also remembers its lexical scope');
    assert.isUndefined(calculator.otherNum, 'local scoped variable are still invisible to outer scopes');
  });

  it('that one is a bit more tricky', function () {
    var a = 5;
    function runMe(a){
      assert.equal(a, 6, "Check the value of a.");

      function innerRun(){
        assert.equal(b, 7, "Check the value of b.");
        assert.equal(c, undefined, "Check the value of c.");
      }

      var b = 7;
      innerRun();
      var c = 8;
    }
    runMe(6);
  });

  it('loop closure confusion', function (done) {
    var count = 0;

    for (var d = 0; d < 3; d++ ) {
      setTimeout(function(){
        count++;
        assert.equal(d, 3, "Check the value of d.");
        if (count === 3) { done(); }
      }, 100);
    }
  });
});