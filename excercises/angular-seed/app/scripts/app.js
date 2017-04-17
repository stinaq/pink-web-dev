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
      .when('/version-1', {
        templateUrl: 'views/version-1.html',
        controller: 'Version1Ctrl',
        controllerAs: '$ctrl'
      })
      .when('/version-2-1', {
        templateUrl: 'views/version-2-1.html',
        controller: 'Version21Ctrl',
        controllerAs: '$ctrl'
      })
      .when('/version-2-2', {
        templateUrl: 'views/version-2-2.html',
        controller: 'Version22Ctrl',
        controllerAs: '$ctrl'
      })
      .when('/version-3', {
        templateUrl: 'views/version-3.html',
        controller: 'Version3Ctrl',
        controllerAs: '$ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
