function Chrono(duration, element, callback) {
  element.querySelector('button.start').onclick = this.start.bind(this);
  this.progressBar = element.querySelector('.progress-bar');
  this.timer = element.querySelector('.timer');
  this.duration = duration;
  this.callback = callback;
  this.delta = 0;
  this._isRunning = false;
  element.querySelector('button.stop').onclick = this.stop.bind(this);
}

Chrono.prototype.start = function start() {

  if (this._isRunning) {
    return;
  }

  this._isRunning = true;
  this.startTime = new Date().getTime();
  this.delta = 0;

  this._interval = setInterval(function() {
    this.delta = new Date().getTime() - this.startTime;
    if (this.delta < this.duration) {
      this.render();
    } else {
      this.delta = this.duration;
      this.render();
      this.stop();
      if(typeof this.callback === 'function'){
        this.callback();
      }
    }
  }.bind(this), 1000 / 24);
};

Chrono.prototype.stop = function stop() {
  this._isRunning = false;
  clearInterval(this._interval);
};


Chrono.prototype.render = function render() {
  var percent = this.delta / this.duration * 100;
  var time = Math.round(this.delta * 1000) / 1000000;
  this.progressBar.style.width = percent + '%';
  this.timer.innerHTML = time + 's';
};
