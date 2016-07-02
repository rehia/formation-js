function Stock($element) {
  this.$el = $element;
  this.count = {};
  this.$table = $(document.createElement('table'));
  this.$table.addClass('stock');
  this.$el.append(this.$table);
  this.$tbody = $(document.createElement('tbody'));
  this.$table.append(this.$tbody);
  this.render();
}

Stock.prototype.catchVegetable = function(grid) {
  grid.$el.on('vegetableReady', function(e, data) {
    this.add(data.vegetable);
  }.bind(this));
};

Stock.prototype.add = function(vegetable) {
  if (!this.count[vegetable.TYPE]) {
    this.count[vegetable.TYPE] = 0;
  }
  this.count[vegetable.TYPE]++;
  this.render();
};

Stock.prototype.set = function(values){
  this.count = values;
  this.render();
};

Stock.prototype.render = function() {
  var types = Object.keys(this.count);
  var html = '';
  types.forEach(function(type) {
    html += '<tr>';
    html += '<th><img src="/img/'+type+'.png" /></th>'; 
    html += '<td>x '+this.count[type]+ '</td>'; 
    html += '</tr>'; 

  }.bind(this));
  this.$tbody.html(html);
};
