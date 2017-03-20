(function() {
  'use strict';

  console.log('Filen om errors körs nu');

  // Vilka olika typer av fel finns det?

  /*
    SYNTAXFEL:
    Här har jag glömt en parentes.
    Då svarar datorn med "SyntaxError"
  */
  function hej( )

  }

  /* 
    RUNTIME ERRORS, ÄVEN KALLADE EXCEPTIONS
    De händer undertiden som programmet körs. Allt som står innan
    felet kommer köras, men inget efter. Programmet "fastnar" när det
    stöter på problemet.

    Här har jag först försökt logga en variabel som inte finns, sen försökt
    kalla på en funktion som inte finns.

    Båda de ger exceptions, och datorn svarar med "Uncaught ReferenceError"
  */
  console.log(myVariableThatDoesNotExists);
  myNonExistingFunction();

  /*
    PROGRAMMERINGSFEL, eller logiska fel
    Det är när programmeraren gjort ett fel som inte får koden att gå sönder,
    men den beter sig inte som det är tänkt. Den kör glatt vidare, men fel
    saker händer
  */

  var a = 11;
  if(a = 10) {
    console.log('a är lika med 10');
  }
  
  console.log('Det här är slutet av filen om errors');
})();
