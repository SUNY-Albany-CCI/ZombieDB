//
// Survival Suggestion: The zombie may be gone, but the threat lives on.
//

console.log('List of zombies... no place is safe... ');

var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var Db = new mongodb.Db('zombiedb', server, {w:0});

Db.open(function (err, client) {

  if (err) throw err;

  var zombiesCollection = new mongodb.Collection(client, 'zombies');

  zombiesCollection.find().each(function(err, zombie) {

    if( zombie == null) {
      Db.close()
      }
    else {
      console.log(zombie._id, " strength: ", zombie.strength, " location: ", zombie.location );
      }

  });

});


console.log('\n');
