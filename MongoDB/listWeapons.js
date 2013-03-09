//
// Survival Suggestion: Pick weapons that hurt zombies.
//

print('\n These are the suggested weapons \n')

db.weapons.find().forEach(function(weapon) {
  print( weapon.name, " effectivenes: ", weapon.effectiveness )
})
