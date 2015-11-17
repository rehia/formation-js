function doAsync() {
  return new Promise(function(resolve) {
    var timer = Math.random() * 2000;
    console.log('will execute in:', timer);
    setTimeout(function() {
      resolve(timer);
    }, timer);
  });
}

Promise.all([
  doAsync(),
  doAsync()
]).then(function(timers) {
  console.log('done after:', Math.max(timers[0], timers[1]));
});
