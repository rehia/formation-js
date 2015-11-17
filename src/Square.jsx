var React = require('react');

var SIZE = 70;

var Square = React.createClass({

  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    type: React.PropTypes.string,
    grow: React.PropTypes.number
  },

  render: function render() {
    var style = {
      width: SIZE,
      height: SIZE,
      top: SIZE * this.props.y,
      left: SIZE * this.props.x,
      background: 'url(/img/ground.png)',
      position: 'absolute'
    };
    var scale = 0.5 + 0.5 * this.props.grow / 4;
    var vege_style = {
      width: SIZE,
      height: SIZE,
      transform: 'scale(' + scale + ')'
    };
    if (this.props.type) {
      vege_style.background = 'url(/img/' + this.props.type + '.png) no-repeat 50% 50%';
    }
    return <div style={style}>
      <div style={vege_style}></div>
    </div>;
  }

});

module.exports = Square;
