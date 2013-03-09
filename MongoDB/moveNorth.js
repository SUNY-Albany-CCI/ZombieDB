//
// Survival advice:
//
//    Keep moving, keep low, keep quiet, keep alert !
//

var personEntry = db.people.find( { name: "Sean" }).limit(1);

print('\n', personEntry.name, ' is at ', personEntry.location);

