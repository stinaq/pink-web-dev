(function() {
  'use strict';

  function convertCmToMeter(meter) {
    return meter/100;
  }

  var convertButton = document.querySelector('#convert-button');
  convertButton.addEventListener('click', function(){
    var inputValue = document.querySelector('#cm-input').value;
    
    var resultValue = convertCmToMeter(inputValue);
    var resultElement = document.querySelector('#result');

    if(isNaN(resultValue)) {
      resultElement.textContent = 'Du måste ange en siffra';
    } else {
      resultElement.textContent = resultValue;
    }

  });

  function getMonthNameFromNumber(number) {
    if (number > 12) {
      throw new Error('För hög siffra på månad');
    } else {
      var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
      var monthIndex = number - 1;
      return monthNames[monthIndex]; 
    }
  }

  var month = getMonthNameFromNumber(14);

  console.log(month);

  // var url = 'https://api.myjson.com/bins/hwwol';
  var url = 'https://api.myjson.com/bins/hfdsfsdfswwol';

  fetch(url)
  .then(function(response) {
    if(response.status === 500) {
      throw new Error('Hittade inte rätt');
    }
    return response.json();
  })
  .then(function(data) {
    console.log('Det gick jättebra!');
    console.log(data);
  })
  .catch(function(error) {
    console.log('error!');
    alert(error);
    console.log('gsdfsd');
  });

})();
