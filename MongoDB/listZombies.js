//
// Survival Suggestion: The zombie may be gone, but the threat lives on.
//

print('\nList of zombies... no place is safe... \n')


db.zombies.find().forEach(function(zombie) {
  print(zombie._id, " weapon: ", zombie.weapon, " location: ",zombie.location )
})


print('\n')
