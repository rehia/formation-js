/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var ___ = 'probably wrong answer';

describe('JSON behavior', function () {

  describe('JSON parsing', function () {

    it('JSON container', function () {
      var a = JSON.parse('{"b": 1}'); // modify json to be valid

      assert.equal(a.b, 1, 'a valid JSON must be contained with in one object or one array');
    });

    it('JSON property name', function () {
      var a = JSON.parse('{"b": 1}'); // modify json to be valid

      assert.equal(a.b, 1, 'a property name should be enclosed within double quotes');
    });

    it('nested object or arrays', function () {
      var a = JSON.parse('{"b": [1,2], "c": {"d": 3}}'); // modify json to be valid

      assert.equal(a.b[1], 2, 'an array should be closed properly');
      assert.equal(a.c.d, 3, 'and so does an object');
    });

    it('trailing commas', function () {
      var a = JSON.parse('{"b": [1,2], "c": {"d": 3}}'); // modify json to be valid

      assert.equal(a.b[1], 2, 'JSON.parse() does not allow trailing commas in arrays');
      assert.equal(a.c.d, 3, 'nor in objects');
    });

    it('null values', function () {
      var a = JSON.parse('{"b": null}'); // modify json to be valid

      assert.isNull(a.b, 'null values are also parsed as null');
    });

    it('boolean values', function () {
      var a = JSON.parse('{"b": true, "c": true}'); // modify json to be valid

      assert.isTrue(a.b, 'boolean values are special values');
      assert.isTrue(a.c, 'and should not be enclosed within double quotes');
    });

    it('numeric values', function () {
      var a = JSON.parse('{"b": 3, "c": 2}'); // modify json to be valid

      assert.strictEqual(a.b, 3, 'numeric values are special values');
      assert.strictEqual(a.c, 2, 'and should not be enclosed within double quotes');
    });

    it('with reviver', function () {
      var a = JSON.parse('{"b": 3, "c": "tf"}', function (key, value) {
        if (typeof value === 'number') {
          return value + 1;
        }
        return value;
      });

      assert.equal(a.b, 4, 'this integer should have been incremented by one');
      assert.equal(a.c, 'tf', 'but not this property... just no ! :)');
    });
  });

  describe('JSON serialization', function () {

    it('stringify an object', function () {
      var json = JSON.stringify({ b: 1 });

      assert.equal(json, '{"b":1}', 'the object has been stringified !')
    });

    it('stringify data types', function () {
      var json = JSON.stringify({ b: 'hey', c: true, d: new Date(2015, 11, 16), e: [1, 2] });

      assert.equal(json, '{"b":"hey","c":true,"d":"2015-12-15T23:00:00.000Z","e":[1,2]}', 'the object has been stringified !')
    });

    it('stringify undefined values', function () {
      var a = { b: 'hey', c: 1 }; // what can we do with a ? (assign values, don't change initial object)
      a.c = undefined;
      a.d = null;
      var json = JSON.stringify(a);

      assert.equal(json, '{"b":"hey","d":null}', 'the object has been stringified !')
    });

    it('pretty JSON', function () {
      var json = JSON.stringify({ b: 1, c: 2}, null, 2);

      assert.equal(json.split('\n')[2], '  "c": 2', 'a pretty json can be generated with standard API');
    });

    it('JSON replacer', function () {
      var json = JSON.stringify({ b: 2, c: 'tf'}, function (key, value) {
        if (typeof value === 'number') {
          return value + 1;
        }
        return value;
      });

      assert.equal(json, '{"b":3,"c":"tf"}', 'the numeric value has been replaced while being serialized');
    });

    it('toJSON custom method', function () {
      var a = { b: 'hey', c: 1 }; // what can we do with a ?
      a.toJSON = function () {
        return this.b + ' Jude!';
      };
      var json = JSON.stringify(a);

      assert.equal(json, '"hey Jude!"', 'custom json serialization should apply, even if it’s not json anymore !')
    });
  });
});