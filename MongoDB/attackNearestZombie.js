//
// Survival advice:
//
//    Use your head: cut off theirs.
//

var person = db.people.findOne( { name: "Sean" } );

print('\n',person.name, 'is attacking');

var radius = 10;

var closestZombie = db.zombies.findOne( { location: { $near: person.location, $maxDistance : radius } } );

if ( !closestZombie ) {

  print('\n No Zombies at reach yet... Keep trying !');

}
else {

  var weaponName = person.weapon;

  print('with weapon ', weaponName );

  print('zombie with strength ', closestZombie.strength );

  var weaponEntry = db.weapons.findOne( { name: weaponName } );

  var weaponStrength = weaponEntry.strength;

  var remainingStrength = closestZombie.strength - weaponStrength;

  if ( remainingStrength > 0 ) {

    db.zombies.update( { _id: closestZombie._id }, { $set :  { strength: remainingStrength } } );

    print('zombie location ', closestZombie.location, 'remaining strength ', remainingStrength);

  }
  else {

    print('ZOMBIE DOWN !!');

    db.zombies.remove( { _id: closestZombie._id } );

    print('The zombie may be gone,');
    print('but the threat lives on...');

  }

}
