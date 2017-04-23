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

    $scope.$watch('characters', function(n, o) {
      console.log('watch');
      console.log(n, o);
    });

    $ctrl.deleteCharacter = function(id) {
      console.log('$ctrl.characters');
      console.log($ctrl.characters);
      httpService.deleteCharacter(id);
      setTimeout(function() {
        // $ctrl.characters2 = httpService.state.characters;

        console.log('$ctrl.characters2');
        console.log($ctrl.characters);
      }, 2000);
    };

    $ctrl.addCharacter = function() {
      httpService.addCharacter({
        name: $ctrl.newName,
        species: $ctrl.newSpecies
      });

              console.log('in add');
        console.log($ctrl.characters);
      setTimeout(function() {
        // $ctrl.characters2 = httpService.state.characters;
        // $ctrl.characters = httpService.state.characters;

        // $scope.$digest();
// debugger;
        // httpService.getAllCharacters();


        console.log('$ctrl.characters2');
        console.log($ctrl.characters);
      }, 2000);
    };

  });
