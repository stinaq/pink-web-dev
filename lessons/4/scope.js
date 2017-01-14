
/*
An example of how scopes work
What will it log at the end? 
*/
var name = 'Kajsa';
var surname = 'Svensson';

console.log(name);
console.log(surname);

function printName() {
  var name = 'Sandra';
  surname = 'Persson';
  console.log(name);
}

printName();

console.log(name);
console.log(surname);


/*
An example of nested scopes. 
*/
var word = 'Hello';

function speak() {
  var word = 'Hej';
  console.log('In speak again');
  console.log(word);

  function speakAgain () {
    console.log('In speak again');
    console.log(word);
  }
}

speak();
