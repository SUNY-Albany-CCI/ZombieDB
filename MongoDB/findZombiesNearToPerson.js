//
// Survival advice:
//
//    Keep moving, keep low, keep quiet, keep alert !
//

db.people.find( { name: "Sean" }).forEach(function(person) {

  print('\nThe following Zombies are near ', person.name,'\n');

  db.zombies.find( { location: { $near: person.location } } ).forEach(function(zombie) {

    print( zombie.location, zombie.strength );

    });

  });

