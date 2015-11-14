function Stock(element) {
  this.domElement = element;
  this.count = {};
  //TODO: 
  //create root element based on table
  //with `stock` class
  //<table class="stock">
  //  <tbody>
  //  </tobdy>
  //</table>
  this.render();
}

Stock.prototype.catchVegetable = function(grid) {
  //listen `vegetableReady` and add vegetable to the stock
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

  //TODO: clear current DOM

  //TODO: iterate on this.count to create a raw for each
  //structure should be like that:
  //<tr>
  //  <th><img src="carrot.png"/></th>
  //  <td>x2</td>
  //</tr>
  //and each raw should be append to <tbody>
};
