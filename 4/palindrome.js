(function() {
  'use strict';

  function isPalindrome(word) {
    // Colud be either even or odd in length

    //1.5 variabel för resultat
    var result = true;
    var wordAsArray = split('');

    wordAsArray.forEach(function(character, index) {
        // 2 hitta sista bokstaven
      console.log(character);
      var correspondingCharFromEnd = word[word.length - index - 1];

      if(character !== correspondingCharFromEnd) {
        // 3 
        console.log('not palindrome');
        result = false;
      }
    });

    // 1 börja med att sätta upp return
    return result;
  }

  function isPalindrome(word) {
    var result = true;
    var wordAsArray = split('');

    wordAsArray.forEach(function(character, index) {
      var correspondingCharFromEnd = word[word.length - index - 1];

      if(character !== correspondingCharFromEnd) {
        result = false;
      }
    });

    return result;
  }

  function isPalindrome2(word) {
    return !word
            .split('')
            .some(function(character, index) {
              return character !== word[word.length - index - 1];
            });
  }

  window.isPalindrome = isPalindrome;
  window.bla = isPalindrome2;

}());
