var Lightswitch = (function() {
  'use strict';

  var isLightOn = false;

  function toggleLight() {
    if(isLightOn) {
      // Om lampan är tänd --> släck den
      turnLightOff();
    } else {
      // om lampan är släckt --> tänd den
      turnLightOn();
    }
  }

  function turnLightOn() {
    // hämta elementet
    var lightElement = document.querySelector('#light');
    // byta ut bilden mot en bild på släckt lampa
    lightElement.src = 'img/light-on.jpg';
    isLightOn = true;
  }

  function turnLightOff() {
    // hämta elementet
    var lightElement = document.querySelector('#light');
    // byta ut bilden mot en bild på tänd lampa
    lightElement.src = 'img/light-off.jpg';
    isLightOn = false;
  }

  return {
    toggle: toggleLight
  }

}());
