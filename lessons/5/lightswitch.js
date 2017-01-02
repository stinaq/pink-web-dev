(function() {
  'use strict';

  var isLightOn = false;

  function toggleLight() {
    if (isLightOn) {
      turnLightOff();
    } else {
      turnLightOn();
    }

    isLightOn = !isLightOn;
  }

  function turnLightOn() {
    var lightElement = document.querySelector('#light');
    lightElement.src = "img/light-on.jpg";
  }

  function turnLightOff() {
    var lightElement = document.querySelector('#light');
    lightElement.src = "img/light-off.jpg";
  }

  document.querySelector('#hover-me')
    .addEventListener('mouseenter', toggleLight);

  document.querySelector('#click-me')
    .addEventListener('click', toggleLight);

  document.querySelector('#blur-me')
    .addEventListener('blur', toggleLight);

}());
