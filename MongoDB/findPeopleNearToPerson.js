//
//  Survival Advice:  Organize before they rise !
//

var person = db.people.findOne( { name: "Sean" } );

print('\nThe following people are near ', person.name,'\n');

db.people.find( { location: { $near: person.location } } ).forEach(function(closebyperson) {

  print( closebyperson.name, closebyperson.location, closebyperson.weapon );

  });

