'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # Version21Ctrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('Version21Ctrl', function (creatureService) {
  	var $ctrl = this;

    $ctrl.creatures = creatureService.creatures;

  	$ctrl.delete = function(name) {
      creatureService.delete(name);
    };

    $ctrl.addNew = function() {
      var newCreature = {
        name: $ctrl.newName,
        color: $ctrl.newColor
      };

      creatureService.add(newCreature);
    };

    $ctrl.clearNew = function() {
      $ctrl.newName = '';
      $ctrl.newColor = '';
    };

  });
