(function () {
  'use strict';

  var httpService = function ($http) {
    var state = {};
    state.characters = [];

    var getAllCharacters = function() {
      console.log('getting all the characters');
      // This function gets all the characters currently in the database
      // This is called when the service is first loaded (at the end of the file)
      // and then also when another updates (for example delete) is made, since
      // we then need to get all the characters again
      $http({
        method: 'GET',
        url: 'https://testapi.pinkwebdev.se/api/characters?key=stinaq'
      }).then(function successCallback(response) {
        // Here is where we set the state
        // debugger;
        state.characters.splice(0, state.characters.length);
        // state.characters = response.data.map(function(item) {
        //   return item;
        // });
        // debugger;
        state.characters.push.apply(state.characters, response.data);
        // state.characters = response.data;
        console.log(state.characters);
        }, errorLogger);
    };

    var errorLogger = function(response) {
      console.log(response);
    };

    var deleteCharacter = function(id) {
      console.log('doing delete');
      $http({
        method: 'DELETE',
        url: 'https://testapi.pinkwebdev.se/api/characters/' + id + '?key=stinaq'
      }).then(getAllCharacters, errorLogger);
    };

    var addCharacter = function(character) {
      console.log('Adding a character');
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
