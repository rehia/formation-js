/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */

var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
var ___ = 'probably wrong answer';

var module = this;
module.___ = ___; // don't change that line :)

function strictModeDefaultBinding() {
  'use strict';
  return ___;
}

function nonStrictDefaultBinding() {
  'use strict'; // maybe something to do with this line... haha ! "this" line... :D
  return this;
}

describe('JS this context behavior', function () {

  describe('using strict mode', function () {
    'use strict';

    it('by default, this is bound to undefined when in strict mode', function () {
      assert.isUndefined(strictModeDefaultBinding(), 'in strict mode, default this is undefined');
    });

    it('in non strict mode, default binding rule apply', function () {
      // change the behavior in the function
      assert.isFunction(nonStrictDefaultBinding().setTimeout, 'but in non strict mode, this refers to global')
    });

    it('be careful in node, at the root is not the global, but the module', function () {
      assert.isUndefined(module.___, 'beware of some confusion in Node, where the root element is the module, and not the global');
    });

    it('implicit binding rule using a object literal', function () {
      function add(b) {
        return this.a + b;
      }

      var calculator = {
        a: 3,
        add: add
      };

      assert.equal(calculator.add(4), ___, 'when the function is bound to an object, the context is the object itself');
    });

    it('implicit binding rule does not apply so easily when used as callbacks', function (done) {
      function tryIt(callback) {
        assert.equal(callback(5), 8, 'function must be hardly bound when passed as a callback, which is not so natural at first look');
        done();
      }

      var calculator = {
        a: 3,
        add: function add(b) {
          return this.a + b;
        }
      };

      tryIt(calculator.add); // call calculator.add differently. Try 2 approaches : hard binding or closure
    });

    it('explicit binding rule with call and apply', function () {
      function add(b) {
        return this.a + b;
      }

      var calculator1 = { a: 4 };
      var calculator2 = { a: 7 };

      assert.equal(add.___(calculator1, 5), 9, 'you can use Function.prototype.call to explicitly bind a context to the function');
      assert.equal(add.___(calculator2, [6]), 13, 'you can also use Function.prototype.apply, but apply takes an array as 2nd argument');
    });

    it('looping with a callback', function (done) {
      function loop(array, fn){
        for (var i = 0; i < array.length; i++) {
          // call callback here, but don't forget the context !
        }
      }
      var num = 3;
      loop([3, 4, 5], function(value){
        assert.equal(value, num++, "Make sure the contents are as we expect it.");
        assert.instanceOf(this, Array, "The context should be the full array.");
        if (num === 5) { done(); }
      });
    });
  });

  it('the new keyword creates a brand new object, and use that object as the context', function () {
    // non strict mode !
    function Ninja(){
      this.name = "Ninja";
    }

    var ninjaA = Ninja();
    assert.isUndefined(___, "Is undefined, not an instance of Ninja." );

    var ninjaB = new Ninja();
    assert.equal(ninjaB.name, ___, "Property exists on the ninja instance." );
  });

  describe('back in strict mode', function () {
    'use strict';

    it('with new, the context is established for that particular object and not others', function () {
      function Ninja(){
        this.swung = false;

        // Should return true
        this.swingSword = function(){
          this.___ = !this.swung;
          return this.swung;
        };
      }

      var ninja = new Ninja();
      assert.isTrue(ninja.swingSword(), "Calling the instance method." );
      assert.isTrue(ninja.swung, "The ninja has swung the sword." );

      var ninjaB = new Ninja();
      assert.isFalse(ninjaB.___, "Make sure that the ninja has not swung his sword." );
    });

    it('add a method that gives a name to the ninja', function () {
      function Ninja(name){
        // Implement!
        this.changeName = ___;
      }

      var ninja = new Ninja("John");
      assert.equal(ninja.name, "John", "The name has been set on initialization" );

      ninja.changeName("Bob");
      assert.equal(ninja.name, "Bob", "The name was successfully changed." );
    });

    it('order of precedence can be proved', function () {
      function sayHey() {
        this.hey = 'hey, ' + (this.who || 'you');
      }

      assert.Throw(sayHey, ___, null, 'in strict mode, so this is null because of default binding rule');

      var jude = { who: 'Jude', sayHey: sayHey };
      jude.sayHey();
      assert.equal(jude.hey, 'hey, ' + ___, 'implicit binding goes over default binding');

      var joe = { who: 'Joe' };
      jude.sayHey.call(joe);
      assert.equal(joe.hey, 'hey, ' + ___, 'explicit binding goes over implicit binding');

      var ya = { who: 'ya!' };
      var heyYa = sayHey.bind(ya);
      heyYa.call(jude);
      assert.equal(ya.hey, 'hey, ' + ___, 'hard binding goes over explicit binding');

      assert.equal(new sayHey().hey, 'hey, ' + ___, 'new creates a new object');
      assert.equal(new jude.sayHey().hey, 'hey, ' + ___, 'new goes over implicit binding');
      assert.equal(new heyYa().hey, 'hey, ' + ___, 'new goes over hard/explicit binding, but you don’t want to write this!');
    });
  });
});