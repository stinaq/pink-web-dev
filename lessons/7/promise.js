(function() {
  'use strict';

  var url = 'http://httpstat.us/200';

  fetch(url)
  .then(function(response) {
    console.log('fick mat');
    return response.json();
  })
  .then(function(responseAsJson) {

  })
  .catch(function(error) {
    console.log('gick dåligt :( ');
  });
  
})();
