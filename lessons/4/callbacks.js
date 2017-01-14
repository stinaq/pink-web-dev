(function() {
  'use strict';
  /*
  Hur man kan använda en namngiven funktion som callback
  till två olika saker
  Funktionen showSurprise körs här både av setTimeout efter
  5 sekunder, och när man klickar på knappen
  */

  function showSurprise() {
    alert('Surprise!');
  }

  document
    .querySelector('#surprise-button')
    .addEventListener('click', showSurprise);

  setTimeout(showSurprise, 5000);

}());
