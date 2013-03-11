var util = require('util');
var connect = require('connect');
var port = 8888;

connect.createServer( connect.static(__dirname) ).listen(port);

util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + C to stop.');
