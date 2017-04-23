'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # Version3Ctrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('Version3Ctrl', function ($scope, httpService) {
    var $ctrl = this;


    $ctrl.characters = httpService.state.characters;

    $scope.$watch('$ctrl.characters', function(n, o) {
      console.log('watch');
      console.log(n, o);
    });

    $ctrl.deleteCharacter = function(id) {
      httpService.deleteCharacter(id);
    };

    $ctrl.addCharacter = function() {
      httpService.addCharacter({
        name: $ctrl.newName,
        species: $ctrl.newSpecies
      });
    };

  });
