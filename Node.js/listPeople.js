//
// Survival Suggestion: Organize before they rise!
//

console.log('\nList of other survivors... for now... \n');

var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var Db = new mongodb.Db('zombiedb', server, {w:0});

Db.open(function (err, client) {

  if (err) throw err;

  var peopleCollection = new mongodb.Collection(client, 'people');

  peopleCollection.find().each(function(err, person) {

    if( person == null) {
      Db.close()
      }
    else {
      console.log("name: ", person.name, " weapon: ", person.weapon.name, " location: ", person.location );
      }

  });

});


console.log('\n');
