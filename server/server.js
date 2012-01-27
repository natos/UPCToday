// Define /libs as a require path
require.paths.unshift(__dirname + '/libs');

/**
 * module dependencies.
 */
var http = require('http')
,	express = require('express')
,	io = require('socket.io')
,	uuid = require('node-uuid')
,	port = process.env.PORT || 3000;

var socket_id;

/**
 * app configuration.
 */
var app = express.createServer();

app.configure(function(){
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/../public'));
	app.set("view options", { layout: false });
	app.set("views", __dirname + "/views")
	app.register('.html', {
		compile: function(str, options) {
		return function(locals) {
			return str;
		};
	}
	});
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
	app.use(express.errorHandler()); 
});

/**
 * app start
 */

app.listen(port, function() {
	/**
	 * log
	 */
	console.log("Express server listening on port %d", app.address().port);
});


app.get('/', function(req, res){

	socket_id = uuid();
	
	res.render('index.html')
})


/**
 * Socket IO.
 */
// create a socket.io backend for sending facebook graph data
// to the browser as we receive it
var io = require('socket.io').listen(app);

// wrap socket.io with basic identification and message queueing
// code is in lib/socket_manager.js
var socket_manager = require('socket_manager').create(io);

// use xhr-polling as the transport for socket.io
io.configure(function () {
	io.set("transports", ["xhr-polling"]);
	io.set("polling duration", 10);
});

io.sockets.on('connection', function (socket) {

	socket.emit('connected', socket_id);

	/**
	* Overview socket listener
	*/

	socket.on('get-nowandnext', function () {

		var options = {
			host: 'tvgids.upc.nl'
		,	port: 80
		,	path: '/scheduleApi/api/Channel/7J%7C6s%7C7G%7C7K%7C7L/events/NowAndNext.json?optionalProperties=Channel.url%2CChannel.logoIMG%2CEvent.url&order=startDateTime&batchSize=2&batch=0'
		};

		// get
		http.get(options, function(res) {

			var datastream = "";

			res.on("data", function(chunk) {

				datastream += chunk;

			});

			res.on("end", function(chunk) {

				console.log('End processing')
				var raw = new Buffer(datastream, "binary").toString();
				console.log('Raw data')
				console.log(raw);
				console.log('JSON Parse')
				var data = JSON.parse( raw );
				console.log(data);

				socket.emit('set-nowandnext', data);

			});

		// http on error
		}).on('error', function(e) {

			console.log("Got error: " + e.message);

		});
	});


/**
* End Socket
*/
});


/**
* Utils
*/

