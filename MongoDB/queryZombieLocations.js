//
// Survival Suggestion: They feel no fear, why should you?
//

db.zombies.find().forEach(function(zombie) {

  print( zombie.location, zombie.weapon )

})

