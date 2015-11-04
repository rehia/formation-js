/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var ___ = 'probably wrong answer';

describe('JS IIFE and module pattern', function () {

  it('iife is a good way to hide things in their proper scope', function () {
    var num = 3;

    var calculator = {
      add: function (value) {
        return num + value;
      }
    };

    assert.equal(typeof num, "undefined", 'num should not be visible in outer scope');
    assert.equal(typeof calculator, "undefined", 'nor calculator');
  });

  it('we can even inject data in iifes', function () {
    (function (num) {
      var calculator = {
        add: function (value) {
          return num + value;
        }
      };

      assert.equal(calculator.add(10), ___, 'injected value is of course visible inside the iife');
    })(3);

    assert.equal(typeof num, ___, 'num should still not be visible in outer scope');
    assert.equal(typeof calculator, ___, 'nor calculator');
  });

  it('loop closure confusion fixed', function (done) {
    var count = 0;

    for (var d = 0; d < 3; d++ ) {
      (function (d) {
        setTimeout(function(){
          count++;
          assert( d == ___, "Check the value of d." );
          if (count === 3) { done(); }
        }, 100);
      })(d);
    }
  });

  it('when returning an inner closure, an iife helps creating a module', function () {
    var add = (function (num) {
      function add(value) {
        return num + value;
      }

      return ___;
    })(3);

    assert.equal(add(5), ___, 'the returned function is then the public part of the module, like jquery $()');
  });

  it('a module can also return an object, but must have a reference to a closure, to still be the module pattern', function () {
    var calculator = (function (num) {
      function add(value) {
        return num + value;
      }

      return { add: ___ };
    })(7);

    assert.equal(calculator.add(6), ___, 'the returned object is then the public part of the module');
  });

  it('if a module can return a function, that function can be used as a constructor', function () {
    var Calculator = (function () {
      var other = 6;

      return function Calculator(num) {
        this.a = num + other;

        this.add = function add(value) {
          return value + this.a;
        };
      };
    })();

    var calculator = new Calculator(4);
    assert.equal(calculator.add(2), ___, 'the created object method has still a closure over the iife state')
    assert.equal(calculator.a, ___, 'the constructor is used ')
  });
});