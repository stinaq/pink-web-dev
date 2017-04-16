(function () {
  'use strict';

  var creatureService = function () {
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

    var deleteCreature = function(name) {
      for (var i = 0; i < creatures.length; i++) {
        if (creatures[i].name === name) {
          creatures.splice(i, 1);
        }
      }
    };

    var addCreature = function(creature) {
      creatures.push(creature);
    };

    return {
      creatures: creatures,
      add: addCreature,
      delete: deleteCreature
    };
  };

  angular.module('angularSeedApp')
    .factory('creatureService', creatureService);
})();