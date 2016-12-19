(function(){
  'use strict';


  var input = document.querySelector('#validatable-input');
  console.log(input);
  input.addEventListener('blur', function() {
    
  });

  $('#validatable-input').on('keyup', function(test) {
    console.log($('#validatable-input').val());
  })
})();
