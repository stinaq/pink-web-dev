(function() {
  'use strict';

  var url = 'https://api.myjson.com/bins/hwwol';
  var animal;

  setUpChangeUrl();

  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    animal = data;
    setUpData();
  });

  function setUpData() {
    var headlineElement = document.querySelector('#headline');
    headline.textContent = animal.species;

    var latinNameElement = document.querySelector('#latin-name');
    latinNameElement.textContent = animal.latinName;

    var imageElement = document.querySelector('#image');
    imageElement.src = animal.imageUrl;

    var characteristicsElement = document.querySelector('#characteristics');
    characteristicsElement.textContent = animal.characteristics;
  }

  function updateImgUrlData(newImgUrl) {

    // Gör en kopia av animal-objektet eftersom vi alltid vill att animal ska se ut
    // som den gör på servern. Vi vill bara ändra animal om servern har ändrats
    // annars kan vi få en mismatch, alltså att de inte ser likadana ut!
    var copyOfAnimal = Object.assign({}, animal);
    copyOfAnimal.imageUrl = newImgUrl;

    var headers = new Headers({
      "Content-Type": "application/json; charset=utf-8"
    })

    // Här skapar vi en PUT request
    var fetchData = {
      method: 'PUT',
      body: JSON.stringify(copyOfAnimal),
      headers: headers
    };

    fetch(url, fetchData)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      animal = data;
      setUpData();
    })
  }

  // Skapa click handler för knappen, för att hämta ut den nya bildlänken
  // och starta uppdatering av datan
  function setUpChangeUrl() {
    var newImgButtonElement = document.querySelector('#new-image-url-button');
    newImgButtonElement.addEventListener('click', function() {
      var newImgUrl = document.querySelector('#new-image-url').value;
      updateImgUrlData(newImgUrl);
    });  
  }
  
})();
