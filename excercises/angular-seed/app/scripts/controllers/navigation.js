'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('NavigationCtrl', function ($location) {
    var navCtrl = this;

    navCtrl.navLinks = [
      {
        title: 'home',
        linkText: 'Home',
      },
      {
        title: 'version-1',
        linkText: 'Version 1'
      },
      {
        title: 'version-2',
        linkText: 'Version 2'
      },
      {
        title: 'version-3',
        linkText: 'Version 3'
      }
    ];

    navCtrl.isActive = function (page) {
      // This part figures out if the current page you're on matches the 
      // page in the meny, so it can add the 'active' class to the correct item
      // in the menu
      var currentRoute = $location.path().substring(1) || 'home';
      return page === currentRoute;
    };
  });
