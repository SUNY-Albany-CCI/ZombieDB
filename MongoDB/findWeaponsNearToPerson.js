//
// Survival advice: Blades don't need reloading.
//
db.people.find( { name: "Sean" }).forEach(function(person) {

  print('\nThe following weapons are near ', person.name,'\n');

  db.weapons.find( { location: { $near: person.location } } ).forEach(function(weapon) {

    print( weapon.name, weapon.location );

    });

  });

