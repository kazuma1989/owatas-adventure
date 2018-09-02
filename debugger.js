function outline(shape) {
  const rect = new RectangleShape({
    fill: 'transparent',
    stroke: 'red',
    strokeWidth: 1,
    padding: 0,
    width: shape.width,
    height: shape.height,
  }).addChildTo(shape.parent);

  rect.left = shape.left;
  rect.top = shape.top;

  rect.update = function(app) {
    this.left = shape.left;
    this.top = shape.top;
  };
}
