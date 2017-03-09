(function() {
  'use strict';

  var url = 'http://httpstat.us/200';

  fetch(url).then(function(response) {
    console.log('status:');
    console.log(response.status);
  });
  
})();
