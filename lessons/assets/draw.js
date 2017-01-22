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

  var square = function(left, top, height, width, color) {
    createShape(left, top, height, width, color, 'square')
  };

  var circle = function(left, top, height, width, color) {
    createShape(left, top, height, width, color, 'circle')
  };

  var createShape = function(left, top, height, width, color, shapeType) {
    var newShape = document.createElement("div");
    newShape.className = shapeType;

    position(newShape, left, top, height, width);

    if(color) {
      newShape.style.background = color;
    }

    var container = document.getElementById('shape-container')

    if(container) {
      container.appendChild(newShape);
    }
    else {
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(newShape);
    }
  };

  return {
    square: square,
    circle: circle
  };
}();

drawSquare = Draw.Shape.square;
drawCircle = Draw.Shape.circle;




