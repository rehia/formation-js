/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var should = chai.should();
var assert = chai.assert;
var expect = chai.expect;

var sinon = require('sinon');
var sinon_chai = require('sinon-chai');
chai.use(sinon_chai);


function MovieDisplayer(movieFinder) {
  this.movieFinder = movieFinder || new DummyMovieFinder();
}

MovieDisplayer.prototype.title = function displayTitle() {
  return '=== Our Movies ===\n';
};

MovieDisplayer.prototype.header = function displayHeader(headerCase) {
  var header = '= Title = Director = Category = Price =\n';
  if (headerCase === 'lowercase') {
    return header.toLowerCase();
  } else if (headerCase === 'uppercase') {
    return header.toUpperCase();
  }

  return header;
};

MovieDisplayer.prototype.moviesCount = function displayCount() {
  var count = this.movieFinder.listAll().length;
  return 'Our ' + count + ' movies\n';
};

MovieDisplayer.prototype.movies = function () {
  var movies = this.movieFinder.listAll();
  return movies.map(function (movie) {
    return '= ' +
      [movie.title, movie.director, movie.category, movie.price.toFixed(2)]
        .join(' = ') +
      ' =\n';
  })
};

MovieDisplayer.prototype.footer = function displayTitle() {
  return '===========\n';
};

describe('Unit Tests', function () {

  it('should display movie list title', function () {
    assert.fail('implement the test');
  });

  it('should display movie list header in uppercase', function () {
    assert.fail('implement the test');
  });

  it('should display movie list header in lowercase', function () {
    assert.fail('implement the test');
  });

  it('should display movies count', function () {
    assert.fail('implement the test');
  });

  it('should display movie list', function () {
    assert.fail('implement the test');
  });
});

function DummyMovieFinder() {}

DummyMovieFinder.prototype.listAll = function () {
  throw new Error('you should provide a stub here, probably by using sinon');
};