(function() {
  'use strict';
  /* 
  Det som loggas ut här är undefined
  */
  console.log(myNewVariable);
  var myNewVariable = 'hej';

}());

(function() {
  'use strict';
  /* 
  Med hjälp av hoisting så är det föregående exemplet exakt
  samma som att skriva så här
  */
  var myNewVariable;
  console.log(myNewVariable);
  myNewVariable = 'hej';

}());

(function() {
  'use strict';
  /* 
  Därför är det best practice att deklarera alla sina variabler
  i toppen av scope
  */
  var myNewVariable;
  var myName = 'Stina';
  var allAnimals = ['Horse', 'Unicorn', 'Pony'];
  var favouriteShow;

  function declareFavouriteShow() {
    return 'West Wing';
  }

  // För att sedan tilldela dem värde
  var favouriteShow = declareFavouriteShow();

}());

(function() {
  'use strict';
  /* 
  Även funktioner är hoistade
  */

  var favouriteShow;

  // Så funktionen går att köra här, innan den är deklarerad
  declareFavouriteShow();

  function declareFavouriteShow() {
    favouriteShow = 'West Wing';
    console.log('My favourite show: ' + favouriteShow);
  }

}());
