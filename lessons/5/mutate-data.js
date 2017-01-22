(function() {
  'use strict';

  console.log(arrayOfStrings);
  var arrayOfStrings = ["one", "two", "three"];
  // reverse(arrayOfStrings);
  // toUpperCase(arrayOfStrings);
  // console.log(arrayOfStrings);

  var reversed = reverse2(arrayOfStrings);
  var upperCased = toUpperCase2(reversed);
  console.log(upperCased);
  console.log(arrayOfStrings);

  function reverse(array) {
    array.reverse();
  }

  function toUpperCase(array) {
    array.forEach(function(item, index) {
      array[index] = item.toUpperCase()
    });
  }

  function reverse2(array) {
    return array.reverse();
  }

  function toUpperCase2(array) {
    return array.map(function(item) {
      return item.toUpperCase();
    });
  }
}());
