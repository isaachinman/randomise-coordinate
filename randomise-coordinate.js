module.exports = function(coordinate, radius) {

  var radius = radius/111300;
  var u = Math.random();
  var v = Math.random();
  var w = r * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var offset = w * Math.sin(t);

  var newCoordinate = coordinate + offset;

  return newCoordinate;

}
