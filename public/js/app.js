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


			// Preload assets
			var sprites = ["sprite_1.png", "icons_sprite.png", "checkbox_sprite.png", "channel_logos_sprite.png"]
			, 	preload = {}
			,	i = 0
			,	t = sprites.length;

			for (i; i < t; i++) {
//				preload['sprite'+i] = new Image();
//				preload['sprite'+i].src = "/assets/" + sprites[i];
			}
			// end preload

			// Socket.io connection to the backend
			//upc.socket = io.connect();
			//upc.socket.on('connect', function() {
				// identify this socket with our auth token
				// upc.socket.emit('auth', socket_id);
			//});

			// Global event dispatcher/handler initialization
			upc.event = _.extend({}, Backbone.Events);
			// Normalize interfaces, just asthetics
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

			return this;

		}

	}

	return app;

}); // define