var express = require('express');
var app = express();
var server = require('http').Server(app);

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/public/index.html');
// });

// app.use('/public',express.static(__dirname + '/public'));

// server.listen(8080);
// console.log('server working')

// var io = require('socket.io')(server,{});
// io.sockets.on('connection',function(socket){
// 	console.log('socket connection');

// 	socket.on('happy',function(){
// 		console.log('happy');
// 	});
// });

server = app.listen(8080);

app.use(express.static('public'));

console.log('my js is running!');

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection:' + socket.id);

	// socket.on('key', mouseMsg);

	// function mouseMsg(data){
	// 	socket.broadcast.emit('key', data);
	// 	console.log(data);
	// }
}

io.sockets.on('score', playerScore);

function playerScore(socket){
	console.log('Your score is' + points);
}