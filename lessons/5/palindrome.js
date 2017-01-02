(function() {
  'use strict';

  function isPalindrome(word) {
    // För att veta om något är ett palindrom
    // behöver vi titta på första bokstaven och
    // jämföra med sista, sen nästa inåt

    var result = true;
    var halfLength = Math.floor(word.length / 2);

    for (var i = 0; i < halfLength; i++) {
      var currentLetter = word[i];
      var currentCorrespondingLetter = word[word.length - i - 1];
      if (currentLetter !== currentCorrespondingLetter) {
        result = false;
      }
    }

    return result;
  }  

  function isPalindrome2(word) {
    // Ett palindrom är en textsträng som är likadan
    // framlänges och baklänges.

    // Vi kan i pseudokod beskriva det så här
    // palindrom = framlänges text === baklänges text

    return word === reverseWord(word);
  }

  function reverseWord(word) {
    return word.split('').reverse().join('');
  }

  window.isPalindrome = isPalindrome;
  window.bla = isPalindrome2;

}());
