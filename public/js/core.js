
var render = function(programme, list) {
	$('<li>')
		.attr('id', programme.id)
		.html('<a href="' + programme.url + '">' + programme.title + '</a>') //<p>' + programme.shortDescription + '</p>')
		.appendTo(list);
}

var socket, socket_id;

// Socket.io
socket = io.connect();

socket.on('connected', function(_socket_id) {
	socket_id = _socket_id;
});

socket.emit('get-nowandnext', socket_id);

socket.on('set-nowandnext', function(source) {

	$('.loader').remove();
	$('#now, #next').empty();
	
	$(source).each(function(i,e){

		//now
		render(e[0].programme, '#now');

		// next
		render(e[1].programme, '#next');
	});
	
});