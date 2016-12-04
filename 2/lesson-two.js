
function sayHello(name, age) {
  console.log('Hej ' + name);
  console.log(name + ' är ' + age + ' år gammal');
}

// sayHello("Louise", 40);

function printPigReport(amountOfPigs) {
  console.log("Du har " + amountOfPigs + " antal grisar");

  if(amountOfPigs < 30) {
    console.log("Du måste köpa fler grisar");
  } else if(amountOfPigs > 100) {
    console.log("Sälj lite grisar");
    var pigsToSell = amountOfPigs - 100;
    console.log("Du behöver sälja " + pigsToSell + " antal grisar");
  }
}

// printPigReport(60);

function generateAmoutOfRice(numberOfPersons) {
  var amountOfRice = numberOfPersons * 0.75;
  console.log("Rice needed: " + amountOfRice + "dl");

  return amountOfRice;
}

// var amountRiceNeeded = generateAmoutOfRice(4);

function generateBenedictCumberbatchName(firstNameLetter, lastNameLetter) {
  var firstName;

  if(firstNameLetter === "A") {
    firstName = "Blubberbutt";
  } else if(firstNameLetter === "B") {
    firstName = "Benedict";
  } else if(firstNameLetter === "C") {
    firstName = "Benedryl";
  }

  var lastName;

  if(lastNameLetter === "A") {
    lastName = "Calldispatch";
  } else if(lastNameLetter === "B") {
    lastName = "Comedicmismatch";
  } else if (lastNameLetter === "C") {
    lastName = "Cunningscratch";
  }

  return firstName + " " + lastName;
}





var animals = ["Varg", "Ekorre", "Orm"];
animals[0];
animals[1];
animals[2];

animals.forEach(function(element) {
  console.log(element);
  addMediumText(element);
});






























