var HOST = 'http://localhost:8082/';

function saveToServer(data, id) {
  var string = JSON.stringify({ state: data });
  var url = HOST + 'fields' + (id ? '/' + id : '');
  var method = id ? 'PUT' : 'POST';

  $.ajax({
    url: url,
    type: method,
    data: string,
    dataType: 'json',
    contentType:"application/json; charset=utf-8"
  }).done(function (id) {
    console.log('id is:' + id);
  });
}

function loadFromServer(id, callback){
  var url = HOST + 'fields/' + id;
  $.getJSON(url)
    .done(callback);
}

window.saveToServer = saveToServer;
window.loadFromServer = loadFromServer;
