(function() {
  'use strict';

  const userNames = keys.members.map(user => user.name);
  const baseUrl = apiUrl;
  const baseData = hpBaseData;

  function deleteAllCurrentData() {
    const promisesOfAllUsers = userNames.map(userName => {
      return fetch(`${baseUrl}?key=${userName}`)
      .then(response => response.json())
      .then(characters => {
        return { userName, characters };
      });
    });

    Promise.all(promisesOfAllUsers)
    .then((allGets) => {

      allGets.map((gottenUser) => {
        console.log(`This is user ${gottenUser.userName}`);
        const userKey = gottenUser.userName;
        gottenUser.characters.forEach((character) => {
          console.log('Found a character and are removing it');
          var headers = new Headers({
            "Content-Type": "application/json; charset=utf-8"
          });

          var fetchData = {
            method: 'DELETE',
            headers: headers
          };

          fetch(`${baseUrl}/${character._id}?key=${userKey}`, fetchData)
          .then(response => {
            console.log(response);
          });
        });
      });
    });
  }

  function createAllCharacters() {

    const promisesOfCharacters = userNames.map((userName) => {
      return baseData.map((character) => {
        var headers = new Headers({
          "Content-Type": "application/json; charset=utf-8"
        });

        var fetchData = {
          method: 'POST',
          body: JSON.stringify(character),
          headers: headers
        };

        return fetch(`${baseUrl}?key=${userName}`, fetchData)
        .then(response => {
          console.log(response);
        });
      });
    });

    Promise.all(promisesOfCharacters)
    .then(() => {
      console.log('all posts are done');
    })
  }

  deleteAllCurrentData();
  // createAllCharacters();

})();
