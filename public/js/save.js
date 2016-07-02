/* global $ */
var HOST = 'http://localhost:8082/';

function saveToServer(data, id) {
  var string = JSON.stringify({
    state: data
  });

  $.ajax({
    type: id ? 'PUT' : 'POST',
    url: '/' + (id || ''),
    data: string,
    contentType: 'application/json',
    dataType: 'json',
    success: function(serverId) {
      console.log('id is:' + serverId);
    }
  });
}

function loadFromServer(id, callback) {
  var url = HOST + 'fields/' + id;
  $.get(url, callback);
}


window.saveToServer = saveToServer;
window.loadFromServer = loadFromServer;
