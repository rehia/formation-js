function doAsync(callback) {
  var timer = Math.random() * 2000;
  console.log('will execute in:', timer);
  setTimeout(function() {
    callback(timer);
  }, timer);
}

doAsync(function(timer) {
  console.log('done after:', timer);
  doAsync(function(timer2) {
    console.log('done after:', timer2);
  });
});

var t1;
var t2;
var call1Done = false;
var call2Done = false;
doAsync(function(timer) {
  t1 = timer;
  if (call2Done) {
    console.log('done after:', Math.max(t1, t2));
  } else {
    call1Done = true;
  }
});
doAsync(function(timer) {
  t2 = timer;
  if (call1Done) {
    console.log('done after:', Math.max(t1, t2));
  } else {
    call2Done = true;
  }
});
