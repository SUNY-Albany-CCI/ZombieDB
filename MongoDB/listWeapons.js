//
// Survival Suggestion: Pick weapons that hurt zombies.
//

print('\n Available weapons \n')


db.weapons.find().forEach(function(weapon) {
  print( weapon.name, " strength: ", weapon.strength, " location: ", weapon.location )
})


print('\n')
