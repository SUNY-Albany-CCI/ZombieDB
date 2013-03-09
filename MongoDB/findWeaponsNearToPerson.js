//
// Survival advice: Blades don't need reloading.
//
db.people.find( { name: "Sean" }).forEach(function(person) {

  db.weapons.find( { location: { $near: person.location } } ).forEach(function(weapon) {

    print( weapon.name, weapon.location );

    });

  });

