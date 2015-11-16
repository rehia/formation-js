var here = this;
setInterval(function(){
  console.log(here);
  postMessage('working hard!');
}, 1000);
