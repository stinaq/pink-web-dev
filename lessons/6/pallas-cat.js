(function() {
  'use strict';

  var animal = {
    species: 'Pallas Cat',
    latinName: 'Otocolobus manul',
    genus: 'Otocolobus',
    imageUrl: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/06/pallas-cat-manul-2__880.jpg',
    characteristics: 'Denna katt är ungefär lika stor eller något mindre än en tamkatt men kan på grund av de korta extremiteterna och den långa pälsen uppfattas som större än denna. Kroppslängden ligger på omkring 45–65 cm och svansen är cirka 31–35 cm lång. Vikten uppgår till 3–5 kg. Den tjocka och fluffiga svansen smalnar inte av mot slutet utan har samma tjocklek över hela sin längd. Huvudet är förhållandevis litet och brett med korta, rundade, lågt sittande öron och stora, framåtriktade ögon som tillsammans ger nosen ett tillplattat utseende. Djurets utseende ledde inledningsvis till att dess upptäckare Peter Simon Pallas felaktigt klassificerade det som en anfader till perserkatten. Pälsen är gulaktig och har mörka strimmor, som inte alltid är tydligt synliga. Färgskillnader finns även mellan olika individer samt mellan de tre underarterna. Däremot förekommer ingen könsdimorfism beträffande färgen.'
  };

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

  var buttonElement = document.querySelector('#new-image-url-button');
  buttonElement.addEventListener('click', function() {
    var newImageUrl = document.querySelector('#new-image-url').value;

    var imageElement = document.querySelector('#image');
    animal.imageUrl = newImageUrl;
    imageElement.src = newImageUrl;
  });

  setUpData();
  
})();
