(function () {
  'use strict';

  var httpService = function ($http) {
    var state = {};
    state.creatures = {};

    $http({
      method: 'GET',
      url: 'https://testapi.pinkwebdev.se/api/characters?key=stinaq'
    }).then(function successCallback(response) {
      console.log(response.data);
      angular.extend(state.creatures, response.data);
      state.creatures = response.data;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        console.log(response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });


    return {
      state: state
    };
  };

  angular.module('angularSeedApp')
    .factory('httpService', httpService);
})();
