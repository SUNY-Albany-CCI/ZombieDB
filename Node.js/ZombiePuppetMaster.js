var databaseUrl = "zombiedb";
var collections = ["people", "zombies","weapons"]
var db = require("mongojs").connect(databaseUrl, collections);

function walkingDead() {

  console.log('------------------');

  db.zombies.find({}, function(err, zombies) {

    if( err || !zombies) console.log("No data found");
    else {
      zombies.forEach( function(zombie) {

      console.log(zombie._id, " strength: ", zombie.strength, " location: ", zombie.location );

      var randomlat = 0.0002 * ( ( Math.random() * 2.0 ) - 1.0 );
      var randomlon = 0.0002 * ( ( Math.random() * 2.0 ) - 1.0 );

      var latitude  = randomlat + zombie.location[0];
      var longitude = randomlon + zombie.location[1];

      db.zombies.update( { _id : zombie._id },
          { $set : {  location : [ latitude, longitude ] } } );
      });
    }

    });

  }


var timeInterval = 1500; // milliseconds
interval = setInterval(walkingDead, timeInterval);

