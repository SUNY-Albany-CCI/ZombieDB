//
// Survival advice:
//
//    Keep moving, keep low, keep quiet, keep alert !
//

var person = db.people.findOne( { name: "Sean" } );

print('\nThe following Zombies are near ', person.name,'\n');

db.zombies.find( { location: { $near: person.location } } ).forEach(function(zombie) {

  print( zombie.location, zombie.strength );

  });

