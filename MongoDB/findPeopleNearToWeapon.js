//
//  Survival Advice:  Organize before they rise !
//

var weapon = db.weapons.findOne( { name: "Baseball Bat" });

var radiusInMeters = 10;
var metersToDegrees = 111320.0;
var radius = radiusInMeters / metersToDegrees;

print('\nThe following people are in a ', radiusInMeters, ' meters radius from ', weapon.name,'\n');

db.people.find( { location: { $near: weapon.location, $maxDistance: radius } } ).forEach(function(closebyperson) {

  print( closebyperson.name, closebyperson.location );

  });

