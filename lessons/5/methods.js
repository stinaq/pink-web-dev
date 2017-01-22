(function () {
  'use strict';

  function horseSpeaks() {
    console.log('Gnägg');
    console.log(this);
  }

  // Horse speaks här blir en metod, eftersom den sitter 
  // fast på ett objekt
  var horse = {
    color: 'bay',
    name: 'Goldie',
    born: '2005',
    speak: horseSpeaks
  };

  console.log(horse.speak());

})();