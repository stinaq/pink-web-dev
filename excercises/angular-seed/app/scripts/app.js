'use strict';

/**
 * @ngdoc overview
 * @name angularSeedApp
 * @description
 * # angularSeedApp
 *
 * Main module of the application.
 */
angular
  .module('angularSeedApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
