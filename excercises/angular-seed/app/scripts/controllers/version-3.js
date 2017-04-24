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

    $ctrl.deleteCharacter = function(id) {
      httpService.deleteCharacter(id);
    };

    $ctrl.addCharacter = function() {
      // Here the character is put together and sent to the service
      // The reason death eater is different is that there is a hyphen in it
      // so the quotations around is neccessary
      httpService.addCharacter({
        name: $ctrl.newName,
        species: $ctrl.newSpecies,
        wand: $ctrl.newWand,
        profession: $ctrl.newProfession,
        description: $ctrl.newDescription,
        'death-eater': $ctrl.newDeathEater
      });

      $ctrl.clearNewForm();
    };

    $ctrl.clearNewForm = function() {
      $ctrl.newName = '';
      $ctrl.newSpecies = '';
      $ctrl.newWand = '';
      $ctrl.newProfession = '';
      $ctrl.newDescription = '';
      $ctrl.newDeathEater = false;
    };


  });
