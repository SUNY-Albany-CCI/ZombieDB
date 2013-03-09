var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var Db = new mongodb.Db('zombiedb', server, {w:0});

function walkingDead() {

  Db.open( function (error, client) {

    if (error) throw error;

    var zombieCollection = new mongodb.Collection(client, 'zombies');

    var listOfZombies = zombieCollection.find();

    console.log('------------------');

    listOfZombies.each( function(err, zombie ) {

      if( zombie == null) {
        Db.close()
        }
      else {

        console.log(zombie._id, " strength: ", zombie.strength, " location: ", zombie.location );

        var randomlat = Math.floor((Math.random()*2)-1);
        var randomlon = Math.floor((Math.random()*2)-1);

        var latitude  = randomlat + zombie.location[0];
        var longitude = randomlon + zombie.location[1];

        zombieCollection.update( { _id : zombie._id },
            { $set : {  location : [ latitude, longitude ] } } );
        }

      });

    });

}

var timeInterval = 1500; // milliseconds
interval = setInterval(walkingDead, timeInterval);

