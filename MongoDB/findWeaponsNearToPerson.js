//
// Survival advice: Blades don't need reloading.
//

var person = db.people.findOne( { name: "Sean" });

print('\nThe following weapons are near ', person.name,'\n');

db.weapons.find( { location: { $near: person.location } } ).forEach(function(weapon) {

  print( weapon.name, weapon.location );

  });

