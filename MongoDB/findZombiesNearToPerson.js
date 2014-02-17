//
// Survival advice:
//
//    Keep moving, keep low, keep quiet, keep alert !
//

var person = db.people.findOne( { name: "Sean" } );

var radiusInMeters = 10;
var metersToDegrees = 111320.0;
var radius = radiusInMeters / metersToDegrees;

print('\nThe following Zombies are in a ', radiusInMeters, ' meters radius from ', person.name,'\n');

db.zombies.find( { location: { $near: person.location, $maxDistance : radius } } ).forEach(function(zombie) {

  print( 'location: ', zombie.location, ' strength: ', zombie.strength );

  });

