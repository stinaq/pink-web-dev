'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # Version3Ctrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('Version3Ctrl', function (httpService) {
    var $ctrl = this;

    $ctrl.creatures = httpService.state.creatures;

    $ctrl.delete = function(name) {
      httpService.delete(name);
    };

  });
