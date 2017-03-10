(function() {
  'use strict';

  const userNames = keys.members.map(user => user.name);
  const baseUrl = apiUrl;
  const baseData = hpBaseData;

  let promisesOfAllUsers = userNames.map(userName => {
    return fetch(`${baseUrl}?key=${userName}`)
    .then(response => response.json())
    .then(data => {
      return {
        userName: userName,
        characters: data        
      };
    })
  });

  Promise.all(promisesOfAllUsers)
  .then((allGets) => {

    allGets.map((gottenUser) => {
      console.log(gottenUser.userName);
      const userKey = gottenUser.userName;
      gottenUser.characters.forEach((character) => {
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


  function createCharacter(userKey, character) {
    var headers = new Headers({
      "Content-Type": "application/json; charset=utf-8"
    });

    // Sätt ihop alla delarna
    var fetchData = {
      method: 'POST',
      body: JSON.stringify(character),
      headers: headers
    };

    fetch(`${baseUrl}?key=${userKey}`, fetchData)
    .then(response => {
      console.log(response);
    });
  }

  // function createAllCharacters

  // createCharacter('stinaq', baseData[0])
})();
