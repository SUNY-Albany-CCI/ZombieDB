//
// Survival advice:
//
//    Use your head: cut off theirs.
//

var person = db.people.findOne( { name: "Sean" } );

print('\n',person.name, 'is attacking');

var listOfZombies = db.zombies.find( { location: { $near: person.location } } );

var closestZombie = listOfZombies[0];

var weaponName = person.weapon;

print('with weapon ', weaponName );

var weaponEntry = db.weapons.findOne( { name: weaponName } );

var weaponStrength = weaponEntry.strength;

var remainingStrength = closestZombie.strength - weaponStrength;

if ( remainingStrength > 0 ) {

  db.zombies.update( { _id: closestZombie._id }, { $set :  { strength: remainingStrength } } );

  print('zombie location ', closestZombie.location, 'strength ', remainingStrength);

}
else {

  print('ZOMBIE DOWN !!');

  db.zombies.remove( { _id: closestZombie._id } );

  print('The zombie may be gone,');
  print('but the threat lives on...');

}


