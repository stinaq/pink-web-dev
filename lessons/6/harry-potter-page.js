(function() {
  'use strict';

  var harryPotterDatabase = [
    {
      name: 'Penelope Clearwater'
    },
    {
      name: 'Hermione Granger'
    },
    {
      name: 'Lavender Brown'
    },
    {
      name: 'Cho Chang'
    },
    {
      name: 'Ginny Weasly'
    },
    {
      name: 'Bathilda Bagshot'
    },
    {
      name: 'Katie Bell'
    },
  ];

  function listAllCharacters() {
    var charachterList = document.querySelector('#character-list');

    // This is to empty the list, so that we don't just add duplicates
    charachterList.innerHTML = '';

    harryPotterDatabase.forEach(function(item) {
      var charachterElement = document.createElement('li');
      charachterElement.textContent = item.name;
      charachterList.appendChild(charachterElement);
    });
  }

  function addCharacter(name) {
    harryPotterDatabase.push({name: name});
    listAllCharacters();
  }

  function setUpAddNewHandler() {
    var addNewButton = document.querySelector('#new-character-button');
    addNewButton.addEventListener('click', function() {
      var newCharacterInput = document.querySelector('#new-character-name');
      addCharacter(newCharacterInput.value);
      newCharacterInput.value = '';
    });
  }

  listAllCharacters();
  setUpAddNewHandler();
  
})();
