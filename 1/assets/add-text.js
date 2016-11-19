var AddText = AddText || {};

AddText.Add = function() {

  var large = function(text) {
    var largeText = document.createElement('h1');
    largeText.textContent = text;
    largeText.className = 'large-text';
    var container = document.getElementById('shape-container')
    container.appendChild(largeText);
  };

  var medium = function(text) {
    var mediumText = document.createElement('h2');
    mediumText.textContent = text;
    mediumText.className = 'medium-text';
    var container = document.getElementById('shape-container')
    container.appendChild(mediumText);
  };

  return {
    large: large,
    medium: medium
  };
}();


addLargeText = AddText.Add.large;
addMediumText = AddText.Add.medium;




