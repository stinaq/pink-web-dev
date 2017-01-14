(function() {
  'use strict';

  function leftPadWithText(originalText) {
    return 'Text: ' + originalText;
  }

  function replaceCatWithDog(originalText) {
    return originalText.replace('katt', 'hund');
  }

  function addBangEnding(originalText) {
    var bangEnded;

    if(originalText.includes('häst')) {
      bangEnded = originalText + '!';
    } else {
      bangEnded = originalText;
    }

    return bangEnded;
  }

  function makeTextUgly(originalText) {
    var leftPadded = leftPadWithText(originalText);
    var withoutCat = replaceCatWithDog(leftPadded);
    var bangEnded = addBangEnding(withoutCat);

    return bangEnded;
  }

  var someText = 'Här är en text med bland annat orden katt och häst i';


  var result = makeTextUgly(someText);
  console.log(result);

}());
