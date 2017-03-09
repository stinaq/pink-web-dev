(function() {
  'use strict';

  function convertMeterToCm(meter) {
    return meter/100;
  }

  var convertButton = document.querySelector('#convert-button');
  convertButton.addEventListener('click', function(){
    var inputValue = document.querySelector('#cm-input').value;
    
    var resultValue = convertMeterToCm(inputValue);
    var resultElement = document.querySelector('#result');

    if(isNaN(resultValue)) {
      resultElement.textContent = "Du måste ange en siffra";
    } else {
      resultElement.textContent = resultValue;
    }
  });


  function getMonthNameFromNumber(number) {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    var monthIndex = number - 1;
    if (number > 12) {
      throw new Error('Finns inte så många månader');
    } else {
      return monthIndex[monthIndex];
    }
  }

  // getMonthNameFromNumber(15);

  var url = 'https://api.myjson.com/bins/hwwol';
  // var url = 'https://api.myjson.com/bins/hfdsfsdfswwol';

  fetch(url)
  .then(function(response) {
    if (response.status === 500) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
  .then(function(data) {
    console.log('Det gick jättebra!');
    console.log(data);
  })
  .catch(function(error) {
    console.log('error!');
    // alert(error);
  });

})();
