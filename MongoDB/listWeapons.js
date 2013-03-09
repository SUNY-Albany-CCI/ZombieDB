//
// Survival Suggestion: Pick weapons that hurt zombies.
//
db.weapons.find().forEach(function(weapon) {
  print( weapon.name, " effectivenes: ", weapon.effectiveness )
})
