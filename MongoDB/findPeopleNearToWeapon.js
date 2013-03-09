//
//  Survival Advice:  Organize before they rise !
//
db.weapons.find( { name: "Baseball Bat" }).forEach(function(weapon) {

  db.people.find( { location: { $near: weapon.location } } ).forEach(function(closebyperson) {

    print( closebyperson.name, closebyperson.location );

    });

  });

