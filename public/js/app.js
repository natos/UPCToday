// App.js 

define([

	// Dependencies
	'routers/AppRouter'

,	'js/libs/socket/socket.io.js'
,	'js/libs/iscroll/iscroll.js'

],

function(AppRouter) {

	var app = {

		initialize: function() {

			// Socket.io connection to the backend
			//upc.socket = io.connect();
			//upc.socket.on('connect', function() {
				// identify this socket with our auth token
				// upc.socket.emit('auth', socket_id);
			//});

			// Global event dispatcher/handler initialization
			upc.event = _.extend({}, Backbone.Events);
			// Normalize interfaces
			upc.event.on = upc.event.bind;
			upc.event.emit = upc.event.trigger;

			// Router initialization
			upc.router = new AppRouter();

			// Navigate to default
			if ( !(/#/).test(window.location.toString()) ) {
				upc.router.navigate('home');
			}

			// Initializate history managment
			Backbone.emulateHTTP = true;
			Backbone.emulateJSON = true;
			Backbone.history.start();

			// Show menu
			$('#main-nav').removeClass('off');

			return this;

		}

	}

	return app;

}); // define