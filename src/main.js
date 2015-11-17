var ReactDom = require('react-dom');
var React = require('react');
var Grid = require('./Grid.jsx');

var data = {
  '0-0': {
    type: 'carrot',
    grow: 1
  },
  '1-0': {
    type: null,
    grow: 0
  },
  '0-1': {
    type: 'salad',
    grow: 2
  },
  '1-1': {
    type: 'corn',
    grow: 2
  }
};

ReactDom.render(React.createElement(Grid, {
  grid: data
}), document.getElementById('app'));
