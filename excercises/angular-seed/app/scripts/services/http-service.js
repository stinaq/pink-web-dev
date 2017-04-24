(function () {
  'use strict';

  var httpService = function ($http) {
    var state = {};
    state.characters = [];

    var getAllCharacters = function() {
      // This function gets all the characters currently in the database
      // This is called when the service is first loaded (at the end of the file)
      // and then also when another updates (for example delete) is made, since
      // we then need to get all the characters again
      $http({
        method: 'GET',
        url: 'https://testapi.pinkwebdev.se/api/characters?key=stinaq'
      }).then(function successCallback(response) {
        // Here is where we set the state
        state.characters.length = 0;
        state.characters.push.apply(state.characters, response.data);
        }, errorLogger);
    };

    var errorLogger = function(response) {
      console.log(response);
    };

    var deleteCharacter = function(id) {
      $http({
        method: 'DELETE',
        url: 'https://testapi.pinkwebdev.se/api/characters/' + id + '?key=stinaq'
      }).then(getAllCharacters, errorLogger);
    };

    var addCharacter = function(character) {
      $http({
        method: 'POST',
        data: character,
        url: 'https://testapi.pinkwebdev.se/api/characters/?key=stinaq'
      }).then(getAllCharacters, errorLogger);
    };

    getAllCharacters();

    return {
      state: state,
      getAllCharacters: getAllCharacters,
      deleteCharacter: deleteCharacter,
      addCharacter: addCharacter
    };
  };

  angular.module('angularSeedApp')
    .factory('httpService', httpService);
})();
