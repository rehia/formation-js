function Stock(element) {
  this.domElement = element;
  this.count = {};
  this.tableElement = document.createElement('table');
  this.tableElement.className = 'stock';
  this.domElement.appendChild(this.tableElement);
  this.tbodyElement = document.createElement('tbody');
  this.tableElement.appendChild(this.tbodyElement);
  this.render();
}

Stock.prototype.catchVegetable = function(grid) {
  grid.domElement.addEventListener('vegetableReady', function(e) {
    this.add(e.detail.vegetable);
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
  this.tbodyElement.innerHTML = '';
  var types = Object.keys(this.count);
  types.forEach(function(type) {
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    var td = document.createElement('td');
    var img = new Image();
    img.src = '/img/' + type + '.png';
    var value = document.createTextNode('x' + this.count[type].toString());
    th.appendChild(img);
    td.appendChild(value);

    tr.appendChild(th);
    tr.appendChild(td);

    this.tbodyElement.appendChild(tr);

  }.bind(this));
};
