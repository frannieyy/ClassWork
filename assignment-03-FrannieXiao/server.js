var app = require('express')();
server = app.listen(8080);
var http = require('http').Server(app);
var socket = require('socket.io');
var io=socket(server)
var port = 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('mouse', function(msg){
  	console.log(msg.clientX);
    socket.broadcast.emit('mouse', msg);
  });
});

/*http.listen(port, function(){
  console.log('listening on *:' + port);
});*/


/*var express = require('express');

var app = express();

server = app.listen(8080);

app.use(express.static('public'));

console.log('my js is running!');

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection:' + socket.id);

	socket.on('mouse', mouseMsg);

	function mouseMsg(data){
		io.broadcast.emit('interact', 'hello');
		console.log(data);
	}
}*/