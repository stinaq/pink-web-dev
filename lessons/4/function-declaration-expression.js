(function() {
  'use strict';
  /*
  Function Declaration och Function Expresison är 
  två sätt att göra funktioner på. Namnen är inte viktiga,
  men det är bra att känna till skillnaden hur hur de ser ut
  och hur de beter sig

  */
  var square2;

  var result = square(4);
  console.log(result);

  function square(number) {
    var squaredNumber = number * number;
    return squaredNumber;
  }

  var result2 = square2(5);
  console.log(result2);

  square2 = function(number) {
    var squaredNumber = number * number;
    return squaredNumber;
  };






})();