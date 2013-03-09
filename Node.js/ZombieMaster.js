var http = require('http');
var mongodb = require('mongodb');
var server = new mongodb.Server("127.0.0.1", 27017, {});
var db = new mongodb.Db('zombiedb', server, {})
var port = 8666;

http.createServer( function(req, res) {

console.log('Server Started ');

db.open(function (error, client) {

  if (error) throw error;

  var collection = new mongodb.Collection(client, 'zombies');

  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('No place is safe, only safer !\n');

  collection.find().forEach( function( zombie ) {

        res.write('position ');
        res.write(zombie.location[0]);
        res.write(', ');
        res.write(zombie.location[1]);
        res.write(' strenght ');
        res.write(zombie.strenght);
        res.write('\n');
    })

  res.end("Good Bye !\n");

  });

}).listen(port);

console.log('Server running on port ', port);

