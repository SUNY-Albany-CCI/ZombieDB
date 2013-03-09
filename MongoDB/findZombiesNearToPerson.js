db.people.find( { name: "Sean" }).forEach(function(person) {

  db.zombies.find( { location: { $near: person.location } } ).forEach(function(zombie) {

    print( zombie.location, zombie.weapon )

    })

  })

