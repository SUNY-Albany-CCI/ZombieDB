//
//  Survival Advice:  Organize before they rise !
//

db.people.find( { name: "Sean" }).forEach(function(person) {

  print('\nThe following people are near ', person.name,'\n');

  db.people.find( { location: { $near: person.location } } ).forEach(function(closebyperson) {

    print( closebyperson.name, closebyperson.location, closebyperson.weapon );

    });

  });

