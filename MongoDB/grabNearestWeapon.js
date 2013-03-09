//
// Survival advice:
//
//    Blades don't need reloading
//

var person = db.people.findOne( { name: "Sean" } );

print('\n', person.name, 'is trying to grab a weapon');

var radius = 10;

var closestWeapon = db.weapons.findOne( { location: { $near: person.location, $maxDistance : radius } } );

if ( !closestWeapon ) {

  print('\n No Weapons at reach yet... Keep moving !');

}
else {

  print('found a ',       closestWeapon.name     );
  print('with strength ', closestWeapon.strength );

  // remove from list of available weapons
  db.zombies.remove( { _id: closestWeapon._id } );

  db.people.update( { _id: person._id },
     { $set : {
           weapon : {
              name : closestWeapon.name,
              strength : closestWeapon.strength
              }
            }
     });

}
