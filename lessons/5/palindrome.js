(function() {
  'use strict';
  /*
  Gör en funktion som berättar om ett ord är ett palindrom
  */

  // imperativ progammering
  function isPalindrome(word) {
    var result = true;
    // for varje bokstav i ordet, kolla motsvarande på slutet
    // kolla hälften av ordet, mer behövs inte
    // är alla samma så är det ett palindrom, annars inte

    var halfLength = Math.floor(word.length / 2);

    for(var i = 0; i < halfLength; i++) {
      var currentLetter = word[i];
      var currentCorrespondingLetter = word[word.length - i - 1];

      if(currentLetter !== currentCorrespondingLetter) {
        result = false;
      }
    }

    return result;
  }

  function reverseWord(originalWord) {
    return originalWord.split('').reverse().join('');
  }

  // deklarativ programmering
  function isPalindrome2(word) {
    // palindrom = framlängestext är likamed baklänges text
    return word === reverseWord(word);
  }

  var temp1 = isPalindrome2('anna');
  console.log('Ska bli sant'); 
  console.log(temp1);

  var temp2 = isPalindrome2('tacocat');
  console.log('Ska bli sant'); 
  console.log(temp2);

  var temp3 = isPalindrome2('stina');
  console.log('Ska bli falskt'); 
  console.log(temp3);

  var temp4 = isPalindrome2('stinas');
  console.log('Ska bli falskt'); 
  console.log(temp4);

  var temp5 = isPalindrome2('Tacocat');
  console.log('Ska bli sant'); 
  console.log(temp5);

})();
