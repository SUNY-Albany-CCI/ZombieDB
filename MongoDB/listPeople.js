//
// Survival Suggestion: Organize before they rise!
//

print('\nList of other survivors... for now... \n');


db.people.find().forEach(function(person) {

  print("name: ", person.name, " weapon: ", person.weapon.name, " location: ", person.location );

});


print('\n');
