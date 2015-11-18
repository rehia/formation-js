/* global Backbone, _, $ */
var Square = Backbone.Model.extend({
  defaults: {
    type: null,
    growState: 0
  },
  url: function() {
    return '/backbone/' + this.id + '.json';
  }
});


var square = new Square({
  id: 'valid'
});

square.on('change', function(){
  
});

//#########################################

var Legend = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },
  render: function() {
    this.el.innerHTML = 'this is a <u>' + this.model.get('type') + '</u>';
  }
});

new Legend({
  model: square,
  el: document.getElementById('legend')
});



//#########################################


var SquareView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.model.on('change', this.render, this);
  },
  SIZE: 70,
  render: function() {
    var templateString = $('#tpl').html();
    var templateFunction = _.template(templateString);
    var data = this.model.toJSON();
    data.size = this.SIZE;
    var html = templateFunction(data);
    this.$el.html(html);
  }
});

new SquareView({
  model: square,
  el: document.getElementById('square')
});
