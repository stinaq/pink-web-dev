(function() {
  'use strict';

  var url = 'https://api.myjson.com/bins';
  var data = {
    "namn": "Ada Lovelace",
    "profession": "mathematician"
  };

  var headers = new Headers({
    "Content-Type": "application/json; charset=utf-8"
  });
  
  var fetchData = { 
    method: 'POST', 
    body: JSON.stringify(data),
    headers: headers
  };

  fetch(url, fetchData)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });

})();
