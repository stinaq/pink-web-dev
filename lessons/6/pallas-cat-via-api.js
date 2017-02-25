(function() {
  'use strict';

  var url = 'https://api.myjson.com/bins/x66lp';
  var animal;

  fetchData();
  setUpChangeUrl();

  function fetchData() {
    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
        animal = data;
        setUpData();
      });
  }

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
    var copyOfAnimal = Object.assign({}, animal);
    copyOfAnimal.imageUrl = newImgUrl;

    var headers = new Headers({
      "Content-Type": "application/json; charset=utf-8"
    });
    
    var fetchData = { 
      method: 'PUT', 
      body: JSON.stringify(copyOfAnimal),
      headers: headers
    };

    fetch(url, fetchData)
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
        animal = data;
        setUpData();
      });
  }

  function setUpChangeUrl() {
    var newImgButtonElement = document.querySelector('#new-image-url-button');
    newImgButtonElement.addEventListener('click', function() {
      var newImgUrl = document.querySelector('#new-image-url').value;
      updateImgUrlData(newImgUrl);
    });  
  }
  
})();
