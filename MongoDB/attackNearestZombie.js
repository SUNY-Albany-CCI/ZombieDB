//
// Survival advice:
//
//    Use your head: cut off theirs.
//

var person = db.people.findOne( { name: "Sean" });

print('\nPerson ', person.name,'\n');

var listOfZombies = db.zombies.find( { location: { $near: person.location } } );

var closestZombie = listOfZombies[0];

print(closestZombie.location);

