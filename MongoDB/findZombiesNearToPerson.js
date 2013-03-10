//
// Survival advice:
//
//    Keep moving, keep low, keep quiet, keep alert !
//

var person = db.people.findOne( { name: "Sean" } );

var radius = 10;

print('\nThe following Zombies are in a ', radius, ' meters radius from ', person.name,'\n');

db.zombies.find( { location: { $near: person.location, $maxDistance : radius } } ).forEach(function(zombie) {

  print( 'location: ', zombie.location, ' strength: ', zombie.strength );

  });

