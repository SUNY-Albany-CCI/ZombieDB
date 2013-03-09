//
// Survival Suggestion: Pick weapons that hurt zombies.
//

console.log('\n Available weapons \n');

var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var Db = new mongodb.Db('zombiedb', server, {w:0});

Db.open(function (err, client) {

  if (err) throw err;

  var weaponsCollection = new mongodb.Collection(client, 'weapons');

  weaponsCollection.find().each(function(err, weapon) {

    if( weapon == null) {
      Db.close()
      }
    else {
      console.log(weapon._id, " strength: ", weapon.strength, " location: ", weapon.location );
      }

  });

});


console.log('\n');
