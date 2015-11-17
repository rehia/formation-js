var React = require('react');
var Square = require('./Square.jsx');

var Grid = React.createClass({

  propTypes: {
    grid: React.PropTypes.any
  },
  
  render: function render(){
    var squares = Object.keys(this.props.grid).map(function(key){
      var coor = key.split('-');
      var data = this.props.grid[key];
      return <Square key={key} x={parseInt(coor[0])} y={parseInt(coor[1])} type={data.type} grow={data.grow} />;
    }.bind(this));
    var style = {
      position: 'relative'
    };
    return <div style={style}>{squares}</div>;
  }

});

module.exports = Grid;
