var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs  = require('fs');

var databaseUrl = "zombiedb";
var collections = ["people", "zombies","weapons"]
var db = require("mongojs").connect(databaseUrl, collections);


app.listen(8888);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

var locations = [];

io.sockets.on('connection', function (socket) {

  db.zombies.find({}, function(err, zombies) {
    var counter = 1;
    locations = [];
    if( err || !zombies) console.log("No data found");
    else zombies.forEach( function(zombie) {
      var newzombie = ['Zombie '+counter.toString(),zombie.location[0], zombie.location[1],zombie.strength ];
      locations.push( newzombie  );
      counter += 1;
    } );
  });

  db.people.find({}, function(err, people) {
    var counter = 1;
    if( err || !people) console.log("No data found");
    else people.forEach( function(person) {
      var newperson = [ person.name, person.location[0], person.location[1], 99 ];
      locations.push( newperson  );
      counter += 1;
    } );
  });


  socket.emit('news',locations);
  socket.on('my other event', function (data) {
  });
});
