'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # Version1Ctrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
  .controller('Version1Ctrl', function () {
  	var $ctrl = this;

    // This is the hard coded data used in the HTML, in the file views/version-1.html
  	$ctrl.animals = [
      {
        name: 'Acromantula',
        distinction: 'Capable of speaking human speech'
      },
      {
        name: 'Basilisk',
        distinction: 'Kill with eyes'
      },
      {
        name: 'Bicorn',
        distinction: 'Two horns'
      },
      {
        name: 'Doxy',
        distinction: 'Infest houses'
      },
      {
        name: 'Erumpent',
        distinction: 'Exploding horn'
      },
      {
        name: 'Hippogriff',
        distinction: 'Half horse, half eagle creatures, immensely proud and extremely dangerous'
      },
      {
        name: 'Hoo-hoo',
        distinction: 'Species of firebird native to Japan'
      },
      {
        name: 'Manticore',
        distinction: 'A Manticore has a human-like head, a lion\'s body, and a scorpion\'s tail with a stinger'
      },
      {
        name: 'Salamander',
        distinction: 'Typically on fire'
      },
  	];

    // A function for deleting an animal
    $ctrl.deleteAnimal = function(index) {
      $ctrl.animals.splice(index, 1);
    };

    // A function for adding a new animal
    $ctrl.saveNewAnimal = function() {
      $ctrl.animals.push({name: $ctrl.newName, distinction: $ctrl.newDistinction});
      $ctrl.clearNew();
    };

    // This function clears the input fields for adding a new animal
    $ctrl.clearNew = function() {
      $ctrl.newName = '';
      $ctrl.newDistinction = '';
    };

  });
