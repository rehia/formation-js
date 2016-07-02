function Plant() {
  if (typeof this.MAX_GROW_STATE !== 'number') {
    throw new Error('MAX_GROW_STATE not implemented');
  }
  this.$el = $(document.createElement('div'));
  this.$el.css({
    transition: 'transform 0.3s',
    width: this.WIDTH + 'px',
    height: this.HEIGHT + 'px',
    position: 'absolute',
    background: 'url(' + this.getImagePath() + ')'
  });
  this.setGrowingState(0);
  this.$el.click(this.grow.bind(this));
}

Plant.prototype.getImagePath = function() {
  return '/img/' + this.TYPE + '.png';
};

Plant.prototype.grow = function(e) {
  if (e) {
    e.stopPropagation();
  }
  if (this._growState < this.MAX_GROW_STATE) {
    this.setGrowingState(this._growState + 1);
  } else {
    this.$el.trigger('vegetableReady', {
      vegetable: this
    });
  }
};

Plant.prototype.setGrowingState = function(state) {
  this._growState = state;
  var scale = 0.5 + 0.5 * state / this.MAX_GROW_STATE;
  this.$el.css('transform', 'scale(' + scale + ')');
};
