
        var socket = io('http://localhost:8080');
        var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		var radius = 10;
		var dragging = false;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		context.lineWidth = radius*2;

        var putPoint = function(e){
	        if (dragging){
	        	var json_str ={clientX:e.clientX,clientY:e.clientY};
        		socket.emit('mouse',json_str);
        		console.log("local message:"+json_str);
				context.lineTo(e.clientX, e.clientY);
				context.stroke();
				context.beginPath();
				context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
				context.fill();
				context.beginPath();
				context.moveTo(e.clientX, e.clientY);
			}
        }
		var engage = function(e){
			dragging = true;
			putPoint(e);
		}

		var disengage = function(){
			dragging = false;
			context.beginPath();
		}
		canvas.addEventListener('mousedown', engage);
		canvas.addEventListener('mousemove', putPoint);
		canvas.addEventListener('mouseup', disengage);
        /*$('form').submit(function(){
          socket.emit('chat message', $('#m').val());
          $('#m').val('');
          return false;
        });*/
        socket.on('mouse', function(e){
        	console.log(e.clientX);
        	context.lineTo(e.clientX, e.clientY);
			context.stroke();
			context.beginPath();
			context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
			context.fill();
			context.beginPath();
			context.moveTo(e.clientX, e.clientY);  	
          //$('#messages').append($('<li>').text(msg));
          //window.scrollTo(0, document.body.scrollHeight);
        });

/*
socket = io.connect('http://localhost:8080');
//socket.on('mouse', putPoint);
socket.on('chat message',putOtherPoint);

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

var putPoint = function(e){
	//console.log(e);
	//socket.emit('mouse',{clientX:e.clientX,clientY:e.clientY});
	socket.emit('chat message','hello');
	if (dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

var putOtherPoint = function(data){
	if (dragging){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

// socket.emit('mouse', engage);
// socket.emit('mouse', disengage);

var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', putPoint);
//canvas.addEventListener('mousemove', putPoint);
//canvas.addEventListener('mouseup', disengage);
*/