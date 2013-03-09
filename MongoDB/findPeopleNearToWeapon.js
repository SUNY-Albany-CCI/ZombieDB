//
//  Survival Advice:  Organize before they rise !
//

var weapon = db.weapons.findOne( { name: "Baseball Bat" });

db.people.find( { location: { $near: weapon.location } } ).forEach(function(closebyperson) {

  print( closebyperson.name, closebyperson.location );

  });

