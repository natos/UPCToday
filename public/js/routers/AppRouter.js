// AppRouter.js

define([

	'views/Home'
,	'views/TVGuide'
,	'views/OnDemand'
,	'views/CatchUp'
,	'views/More'

],

function(HomeView, TVGuideView, OnDemanView, CatchUpView, MoreView) {

	return Backbone.Router.extend({

		initialize: function() {
			$('.back.button').click(function(event){
				history.go(-1);
			});
		}

		// To know which view is the current
,		current: undefined

		// Declaring all app routes here
		// "someview": "somehandler"
,		routes: {
			"home"			: "home"
		,	"ondemand"		: "ondemand"
		,	"catchup"		: "catchup"
		,	"tvguide"		: "tvguide"
		,	"more" 			: "more"
		}

,		home: function() {
			this.load(HomeView);
			$('a[href="#home"]').addClass('selected');
		}

,		ondemand: function() {
			this.load(OnDemanView);
			$('a[href="#ondemand"]').addClass('selected');
		}

,		catchup: function() {
			this.load(CatchUpView);
			$('a[href="#catchup"]').addClass('selected');
		}

,		tvguide: function() {
			this.load(TVGuideView);
			$('a[href="#tvguide"]').addClass('selected');
		}

,		more: function() {
			this.load(MoreView);
			$('a[href="#more"]').addClass('selected');
		}

		// Generic view loader
,		load: function(View) {

			if (upc.current) {
				upc.current.unload();
			}

			upc.current = new View();
			upc.current.render();

			$('nav a').removeClass('selected');
		}

	});

}); // define