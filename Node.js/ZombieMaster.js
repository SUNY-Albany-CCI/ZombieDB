var http = require('http');
var mongodb = require('mongodb');

var server = new mongodb.Server("127.0.0.1", 27017, {});

var db = new mongodb.Db('zombiedb', server, {})

var port = 8666;

http.createServer( function(req, res) {

  console.log('Server Started ');

  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('No place is safe, only safer !\n');

  db.open( function (error, client) {

    if (error) throw error;

    var collection = new mongodb.Collection(client, 'zombies');

    var listOfZombies = collection.find();

    listOfZombies.each( function(err, zombie ) {

      res.write(' strength ');
      res.write('\n');

      });

    db.close();
    });

  res.end("Good Luck !\n");

}).listen(port);

console.log('Server running on port ', port);

