/* jslint node: true */
/* jslint expr: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var chai = require('chai');
var should = chai.should();
var ___ = 'probably wrong answer';

describe('Tests in Browser', function () {

  beforeEach(function () {
    var container = '' +
      '<div id="content">' +
      '  <h3>This is the title</h3>' +
      '  <section>' +
      '    <p>This is the first paragraph. And we can have ' +
      '      <span>one span</span>, <span>two spans</span>, and even <span>three spans</span>' +
      '    </p>' +
      '  </section>' +
      '  <section class="second">' +
      '    <p>The second paragraph contains an unordered list with: </p>' +
      '    <ul>' +
      '      <li>one</li>' +
      '      <li>two</li>' +
      '      <li>three</li>' +
      '      <li>four</li>' +
      '      <li>five</li>' +
      '      <li>and six items</li>' +
      '    </ul>' +
      '  </section>' +
      '</div>';
    document.body.insertAdjacentHTML('afterbegin', container);
  });

  it('should have a title in the h3', function () {
    document.querySelector('#content h3').innerHTML.should.contain(___);
  });

  it('should have 3 spans in first paragraph', function () {
    document.querySelectorAll('#content section p span').should.have.length(___);
  });

  it('should have a title in the h3', function () {
    var items = document.querySelectorAll('#content .second ul li');
    items.should.have.length(___);
    items[4].innerHTML.should.contain(___);
  });

  afterEach(function () {
    document.body.removeChild(document.getElementById('content'));
  });
});