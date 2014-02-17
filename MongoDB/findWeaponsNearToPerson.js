//
// Survival advice: Blades don't need reloading.
//

var person = db.people.findOne( { name: "Sean" });

var radiusInMeters = 10;
var metersToDegrees = 111320.0;
var radius = radiusInMeters / metersToDegrees;

print('\nThe following weapons are in a ', radiusInMeters, ' meters radius from ', person.name,'\n');

db.weapons.find( { location: { $near: person.location, $maxDistance : radius } } ).forEach(function(weapon) {

  print( weapon.name, weapon.location );

  });

