//
// Survival advice:
//
//    Keep moving, keep low, keep quiet, keep alert !
//

var distance = 0.01;  // 3 yards ~= 1 meter

var results = db.people.find( { name: "Sean" }).limit(1);

var personEntry = results[0];

var name = personEntry.name;
var latd = personEntry.location[0];
var long = personEntry.location[1];

var newlatd = latd - distance;

db.people.update( { _id: personEntry._id }, { $set :  { location: [ newlatd, long ] } } );


print('\n',name, ' moved');
print('from ', latd, long );
print('to   ', newlatd, long );

print('\n');

