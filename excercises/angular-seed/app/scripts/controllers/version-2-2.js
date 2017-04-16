'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # Version22Ctrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('Version22Ctrl', function (creatureService) {
  	var $ctrl = this;

    $ctrl.creatures = creatureService.creatures;

  	$ctrl.delete = function(name) {
      creatureService.delete(name);
    };

  });
