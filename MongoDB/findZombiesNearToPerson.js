//
// Survival advice:
//
//    Keep moving, keep low, keep quiet, keep alert !
//

var person = db.people.findOne( { name: "Sean" } );

print('\nThe following Zombies are near ', person.name,'\n');

db.zombies.find( { location: { $near: person.location } } ).forEach(function(zombie) {

  print( 'location: ', zombie.location, ' strength: ', zombie.strength );

  });

var radius = 10;

print('\nThe following Zombies are in a ', radius, ' meters radius from ', person.name,'\n');

db.zombies.find( { location: { $near: person.location, $maxDistance : radius } } ).forEach(function(zombie) {

  print( 'location: ', zombie.location, ' strength: ', zombie.strength );

  });

