db.people.find( { name: "Sean" }).forEach(function(person) {

  db.weapons.find( { location: { $near: person.location } } ).forEach(function(weapon) {

    print( weapon.name, weapon.location );

    })

  })

