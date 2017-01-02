(function() {
  'use strict';

  var isLightOn = false;

  function toggleLight() {
    if (isLightOn) {
      turnLightOff();
    } else {
      turnLightOn();
    }
  }

  function turnLightOn() {
    var lightElement = document.querySelector('#light');
    lightElement.src = "img/light-on.jpg";
    isLightOn = true;
  }

  function turnLightOff() {
    var lightElement = document.querySelector('#light');
    lightElement.src = "img/light-off.jpg";
    isLightOn = false;
  }

  document.querySelector('#hover-me')
    .addEventListener('mouseenter', toggleLight);

  document.querySelector('#click-me')
    .addEventListener('click', toggleLight);

  document.querySelector('#blur-me')
    .addEventListener('blur', toggleLight);

}());
