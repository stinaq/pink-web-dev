(function() {
  'use strict';

  var url = 'http://httpstat.us/200';

  var promiseOfARequest = fetch(url);

  promiseOfARequest.then(function(response) {
    console.log('gick bra!');
    console.log(response);
  });
  
  promiseOfARequest.catch(function(error) {
    console.log('Gick inte alls bra, blev ett fel');
    console.log(error);
  });
  
})();
