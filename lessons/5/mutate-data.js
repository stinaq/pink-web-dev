(function() {
  'use strict';

  const arrayOfStrings = ["one", "two", "three"];
  reverseMut(arrayOfStrings);
  toUpperCaseMut(arrayOfStrings);
  // Print a reverse list of upper cased strings
  console.log(arrayOfStrings);
  // Also print a reverse list of original cased strings with ! appended
  // ????

  // With return and no mutation

  var arrayOfStrings = ["one", "two", "three"];
  var reversed = reverse(arrayOfStrings);
  var upperCased = toUpperCase(reversed);
  // Print a reverse list of upper cased strings
  console.log(upperCased);
  // Also print a reverse list of original cased strings with ! appended
  var appended = appendBang(reversed);
  console.log(appended);

}());
