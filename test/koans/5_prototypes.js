/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var ___ = 'probably wrong answer';

describe('JS Prototypes behavior', function () {

  it('a function has a prototype property', function () {
    function Ninja(){}

    assert.isObject(Ninja.___, 'every function has a prototype');
    assert.equal(Ninja.prototype.___, Ninja, 'and the constructor property of a function prototype is the function itself');
  });

  it('instantiating an object with new is important', function () {
    function Ninja(){}

    var ninjaA = Ninja();
    assert.isUndefined(ninjaA, "the object is undefined, not an instance of Ninja.");

    var ninjaB = new Ninja();
    assert.equal(ninjaB.___, Ninja, "the object's constructor is the function");
    assert.equal(typeof ninjaB, ___, 'However the type of the instance is still an object.');
    assert.equal(ninjaB.___, Ninja.prototype, 'object dunder proto points to its constructor prototype');
    assert.isTrue(___ instanceof Ninja, 'The object was instantiated properly.');
  });

  it('extending a prototype', function () {
    function Ninja(){}

    Ninja.prototype.swingSword = function(){
      return true;
    };

    var ninja = new Ninja();
    assert.isTrue(ninja.___(), "Method exists and is callable." );
  });

  it('hiding a function of the prototype chain', function () {
    function Ninja(){}

    Ninja.prototype.swingSword = function(){
      return true;
    };

    var ninja = new Ninja();

    ninja.swingSword = function () {
      return false;
    };

    assert.equal(ninja.swingSword(), ___, "prototype function is hidden by object property" );
  });

  it('prototype can be extended even after object instantiation', function () {
    function Ninja(){
      this.swung = true;
    }

    var ninjaA = new Ninja();
    var ninjaB = new Ninja();

    Ninja.prototype.swingSword = function(){
      // code here !
    };

    assert.equal(ninjaA.swingSword().swung, false, "Method exists, even out of order." );
    assert.equal(ninjaB.swingSword().swung, false, "and on all instantiated objects." );
  });

  it('make another instance from object constructor', function () {
    var ninja = (function(){
      function Ninja(){}
      return new Ninja();
    })();

    // Make another instance of Ninja
    var ninjaB = ___;

    assert.equal(ninja.constructor, ninjaB.constructor, "The ninjas come from the same source. but don't do that in your code !!");
  });

  it('prototype chain', function () {
    function Person(){}
    Person.prototype.dance = function(){};

    function Ninja(){}

    // Achieve similar, but non-inheritable, results
    Ninja.prototype = Person.prototype;
    Ninja.prototype = { dance: Person.prototype.dance };

    assert.isFalse((new Ninja()) instanceof ___, "Will fail with bad prototype chain.");

    // Only this maintains the prototype chain
    Ninja.prototype = Object.create(Person.prototype);

    var ninja = new Ninja();
    assert.isTrue(___ instanceof Ninja, "ninja receives functionality from the Ninja prototype" );
    assert.isTrue(___ instanceof Person, "... and the Person prototype" );
    assert.isTrue(___ instanceof Object, "... and the Object prototype" );
  });

  it('implement behavior delegation', function () {
    function Person(){
      this.firstname = '';
      this.lastname = 'Doe';
    }
    Person.prototype.getName = function(){
      return this.firstname + ' ' + this.lastname;
    };

    // Implement a function that inherits from Person
    // and sets a firstname in the constructor
    // don't forget to call Person constructor !!

    var me = new Me('John');
    assert.equal(me.getName(), 'John Doe', "A name was set." );
    assert.equal(me.constructor, Me, 'don’t forget to set constructor property when linking prototypes !');
  });

  it('polymorphism with prototypes', function () {
    function Person(name) {
      this.name = name;
    }

    Person.prototype.sayMyName = function sayMyName() {
      return 'my name is ' + this.name;
    };

    function PolitePerson(name) {
      // call Person constructor somewhere here, but with the current context !
    }

    PolitePerson.prototype = Object.create(Person.prototype);

    PolitePerson.prototype.sayMyName = function sayMyName() {
      return 'hello, ' + ___; // call Person sayMyName here
    };

    var politeChild = new PolitePerson('Bobby');
    assert.equal(politeChild.sayMyName(), 'hello, my name is Bobby', 'the parent class method should also be called');
  });

  it('objects linked to other objects : linkage without prototypes', function () {
    var Person = {
      init: function () {
        this.firstname = '';
        this.lastname = 'Doe';
      },
      getName: function () {
        return this.firstname + ' ' + this.lastname;
      }
    };

    // Implement an object linked to Person
    // and sets a firstname in the init function
    // don't forget to call Person init !!

    var me = Object.create(Me);
    me.init('John');
    assert.equal(me.getName(), 'John Doe', "A name was set." );
  });
});