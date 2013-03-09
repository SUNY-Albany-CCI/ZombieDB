//
// Survival Suggestion: The zombie may be gone, but the threat lives on.
//

print('\nList of zombies... no place is safe... \n')

db.zombies.find().forEach(function(zombie) {
  print( " weapon: ", zombie.weapon, " location: ",zombie.location )
})
