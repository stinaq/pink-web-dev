(function () {
  'use strict';

  var animalService = function () {
    var creatures = [
      {
        name: 'Dragon',
        color: 'green'
      },
      {
        name: 'Chimaers',
        color: 'red'
      },
      {
        name: 'Fairy',
        color: 'pink'
      },
      {
        name: 'Goul',
        color: 'gray'
      }
    ];

    return {
      creatures: creatures
    };
  };

  angular.module('angularSeedApp')
    .factory('animalService', animalService);
})();