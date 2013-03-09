var personlocation = db.people.find( { name: "Sean" }, {location: 1} )
var zombiesnear = db.zombies.find( { location: { $near : personlocation }, { location: 1, weapon: 1 } )

for (zombie in zombiesnear) {
  console.log(zombie)
  }
