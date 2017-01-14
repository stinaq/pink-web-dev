(function(){
  'use strict';

  // A click handler that logs a text to the console
  var button = document.querySelector('#button-to-click');
  button.addEventListener('click', function() {
    console.log('Du klickade!');
  });

  // A handler that reacts on blur
  var inputField = document.querySelector('#validatable-input');
  inputField.addEventListener('blur', function() {
    var text = inputField.value;
    console.log(text);
        
    if (text.length < 10) {
      var errorMessage = document.createElement('p');
      errorMessage.textContent = 'För kort ord';
      var parent = inputField.parentNode;
      parent.appendChild(errorMessage);
    }
  });
  
})();















































// $('#validatable-input').on('keyup', function(test) {
//     console.log($('#validatable-input').val());

//     var thisInput = $('#validatable-input');
//     $('#welcome-text').text(thisInput.val());
//   })


