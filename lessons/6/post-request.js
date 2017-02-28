(function() {
  'use strict';

  // GÖRA POST REQUEST FRON JAVASCRIPT

  // Urlen
  var url = 'https://api.myjson.com/bins';

  // Datan du ska skicka
  var data = {
    "namn": "Ada Lovelace",
    "profession": "mathematician"
  };

  // Skapa upp headers
  var headers = new Headers({
    "Content-Type": "application/json; charset=utf-8"
  });

  // Sätt ihop alla delarna
  var fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: headers
  };

  // Gör själva requesten med fetch()
  fetch(url, fetchData)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })

})();
