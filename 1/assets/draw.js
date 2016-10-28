var Draw = Draw || {};

Draw.Shape = function() {

  var position = function(shape, left, top, height, width) {
    if(left) {
      shape.style.left = left + 'px';
    }

    if(top) {
      shape.style.top = top + 'px';
    }

    if(height) {
      shape.style.height = height + 'px';
    }

    if(width) {
      shape.style.width = width + 'px';
    }
  };

  var square = function(left, top, height, width) {
    createShape(left, top, height, width, 'square')
  };

  var circle = function(left, top, height, width) {
    createShape(left, top, height, width, 'circle')
  };

  var createShape = function(left, top, height, width, shapeType) {
    var newSquare = document.createElement("div");
    newSquare.className = shapeType;

    position(newSquare, left, top, height, width);

    var container = document.getElementById('shape-container')
    container.appendChild(newSquare);
  };

  return {
    square: square,
    circle: circle
  };
}();