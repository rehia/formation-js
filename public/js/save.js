function saveToServer(data, id) {
  var string = JSON.stringify({
    state: JSON.parse(data)
  });

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log('id is:' + xhr.responseText);
    }
  };

  var method = id ? 'PUT' : 'POST';
  var url = 'http://192.168.1.19:8082/fields';
  if (id) {
    url += '/id';
  }
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(string);
}

function loadFromServer(id, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };

  var url = 'http://localhost:8082/fields/' + id;
  xhr.open('GET', url, true);
  xhr.send();
}


window.saveToServer = saveToServer;
window.loadFromServer = loadFromServer;
