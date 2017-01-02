var AddText = AddText || {};

AddText.Add = function() {

  var addToPage = function(element) {
    var specificContainer = document.getElementById('shape-container');

    if(specificContainer) {
      specificContainer.appendChild(element);
    } else {
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(element);
    }
  };

  var large = function(text) {
    var largeText = document.createElement('h1');
    largeText.textContent = text;
    largeText.className = 'large-text';
    addToPage(largeText);
  };

  var medium = function(text) {
    var mediumText = document.createElement('h2');
    mediumText.textContent = text;
    mediumText.className = 'medium-text';
    addToPage(mediumText);
  };

  var small = function(text) {
    var smallText = document.createElement('h3');
    smallText.textContent = text;
    smallText.className = 'small-text';
    addToPage(smallText);
  };

  return {
    large: large,
    medium: medium,
    small: small
  };
}();

addLargeText = AddText.Add.large;
addMediumText = AddText.Add.medium;
addSmallText = AddText.Add.small;
