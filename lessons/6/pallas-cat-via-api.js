(function() {
  'use strict';

  var url = 'https://api.myjson.com/bins/x66lp';

  function displayCharacters(data) {
    var characterList = document.querySelector('#character-list');

    // This is to empty the list, so that we don't just add duplicates
    characterList.innerHTML = '';

    data.forEach(function(item) {
      var charachterElement = document.createElement('li');
      charachterElement.textContent = item.name;
      characterList.appendChild(charachterElement);
    });
  }

  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      displayCharacters(data);
    });
  
})();
