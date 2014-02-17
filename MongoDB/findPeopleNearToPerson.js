//
//  Survival Advice:  Organize before they rise !
//

var person = db.people.findOne( { name: "Sean" } );

var radiusInMeters = 10;
var metersToDegrees = 111320.0;
var radius = radiusInMeters / metersToDegrees;

print('\nThe following people are in a ', radiusInMeters, ' meters radius from ', person.name,'\n');

db.people.find( { location: { $near: person.location, $maxDistance: radius } } ).forEach(function(closebyperson) {

  print( closebyperson.name, closebyperson.location, closebyperson.weapon.name, closebyperson.weapon.strength );

  });

