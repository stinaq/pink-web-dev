(function() {
  'use strict';

  // This is a string with the value "In a galaxy far, far away"
  var address = "In a galaxy far, far away";
  console.log(address);

  function changeAddress(anAddress) {
    // This changes the local variable to "Gallifrey"
    anAddress = "Gallifrey";
    console.log(anAddress);
  }

  changeAddress(address);

  /* This will log "In a galaxy far, far away"
     Strings are passed to a function by value, the
     actual value of the string is passed to the function
     NOT a reference to the original string
  */
  console.log(address);




  // This is an object literal with two properties, name and color
  var horse = {
    name: "Goldie",
    color: "chestnut"
  };

  console.log(horse); //Will print the entire object
  console.log(horse.name); // Will print "Goldie"

  function changeHorseName(aHorse) {
    // This changes the name of the object
    aHorse.name = "Blondie";
    console.log(aHorse.name); // Will print "Blondie"
  }

  changeHorseName(horse);

  /* 
    The following will log "Blonde", because the horse object is
    not a primitive data type, and therefore the original object will 
    be mutated/changed
  */
  console.log(horse.name);

}());
