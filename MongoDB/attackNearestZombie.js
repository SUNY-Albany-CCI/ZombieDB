//
// Survival advice:
//
//    Use your head: cut off theirs.
//

var person = db.people.findOne( { name: "Sean" } );

print('\n',person.name, 'is attacking');

var radius = 0.010;  // about 10 meters

var closestZombie = db.zombies.findOne( { location: { $near: person.location, $maxDistance : radius } } );

if ( !closestZombie ) {

  print('\n No Zombies at reach yet... Keep trying !');

}
else {

  print('with weapon ', person.weapon.name );
  print('zombie with strength ', closestZombie.strength );

  var remainingStrength = closestZombie.strength - person.weapon.strength;

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
