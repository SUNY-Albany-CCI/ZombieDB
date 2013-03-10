//
// Survival advice: Blades don't need reloading.
//

var person = db.people.findOne( { name: "Sean" });

var radius = 10;

print('\nThe following weapons are in a ', radius, ' meters radius from ', person.name,'\n');

db.weapons.find( { location: { $near: person.location, $maxDistance : radius } } ).forEach(function(weapon) {

  print( weapon.name, weapon.location );

  });

