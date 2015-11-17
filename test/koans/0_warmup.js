/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
var ___ = 'probably wrong answer';


describe('Koans warm-up', function () {

  it('is a koan', function () {
    var expected_result = 3; // if you feel that the expected result is bad, change it !
    assert.equal(1 + 1, expected_result, 'a koan is a story, dialogue, question or statement which is used in Zen practice to provoke the "great doubt"');
  });

  it('should be solved one after the other', function () {
    var palindrome = ['r', 'a', 'd', 'a', 'r'].join('');
    assert.equal(palindrome, 'dardar', 'turn the red light into green by solving the koan, but one after the other');
  });

  it('is not about finding the answer', function () {
    assert.isTrue(false, 'a koan is not only about finding the result, it’s about understanding what’s happening');
  });

  it('could be helpful to fill the blanks', function () {
    assert.include('hey !', ___, 'when you meet a blank, try to guess how to fill it ! You’re here to learn, so don’t be afraid to fail !');
  });

  it('was made with mocha and chai', function () {
    var func = 1;

    assert.isFunction(func, "'it' is a test, 'describe' is a test suite. With chai, you can assert with assert, should or expect");
    expect(typeof func()).to.equal('number');
    func().should.equal(1);
  });

});