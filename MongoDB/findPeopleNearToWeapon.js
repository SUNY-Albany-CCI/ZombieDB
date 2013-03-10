//
//  Survival Advice:  Organize before they rise !
//

var weapon = db.weapons.findOne( { name: "Baseball Bat" });

print('\nThe following people are in a ', radius, ' meters radius from ', weapon.name,'\n');

var radius = 20;

db.people.find( { location: { $near: weapon.location, $maxDistance: radius } } ).forEach(function(closebyperson) {

  print( closebyperson.name, closebyperson.location );

  });

