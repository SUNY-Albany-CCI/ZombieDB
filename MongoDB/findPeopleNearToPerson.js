//
//  Survival Advice:  Organize before they rise !
//

var person = db.people.findOne( { name: "Sean" } );

print('\nThe following people are near ', person.name,'\n');

db.people.find( { location: { $near: person.location } } ).forEach(function(closebyperson) {

  print( closebyperson.name, closebyperson.location, closebyperson.weapon.name, closebyperson.weapon.strength );

  });

var radius = 20;

print('\nThe following people are in a ', radius, ' meters radius from ', person.name,'\n');

db.people.find( { location: { $near: person.location, $maxDistance: radius } } ).forEach(function(closebyperson) {

  print( closebyperson.name, closebyperson.location, closebyperson.weapon.name, closebyperson.weapon.strength );

  });

