// AppRouter.js

define([

	'views/Home'
,	'views/MainNav'
,	'views/TVGuide'
,	'views/NowAndNext'
,	'views/OnDemand'
,	'views/CatchUp'
,	'views/WatchNow'
,	'views/More'
,	'views/more/Account'
,	'views/more/MediaBox'
,	'views/more/Favorites'
,	'views/more/Recordings'

],

function(HomeView, MainNavView, TVGuideView, NowAndNextView, OnDemanView, CatchUpView, WatchNowView, MoreView, AccountView, MediaBoxView, FavoritesView, RecordingsView) {

	return Backbone.Router.extend({

		initialize: function() {
			// Header
			$('#header-container').removeClass('off');
			// Main Nav
			upc.mainNav = new MainNavView();
			upc.mainNav.render();
			// Back button behavior
			$('.back.button').click(function(event){ history.go(-1); });
		}

		// To know which view is the current
,		current: undefined

		// Declaring all app routes here
		// "someview": "somehandler"
,		routes: {
			"home"				: "home"
		,	"ondemand"			: "ondemand"
		,	"catchup"			: "catchup"
		,	"nowandnext"		: "nowandnext"
		,	"tvguide"			: "tvguide"
		,	"watchnow"			: "watchnow"
		,	"more" 				: "more"
			,	"more/account"		: "account"
			,	"more/mediabox"		: "mediabox"
			,	"more/favorites"	: "favorites"
			,	"more/recordings"	: "recordings"

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

,		nowandnext: function() {
			this.load(NowAndNextView);
			$('a[href="#nowandnext"]').addClass('selected');
		}

,		tvguide: function() {
			this.load(TVGuideView);
			$('a[href="#tvguide"]').addClass('selected');
		}

,		watchnow: function() {
			this.load(WatchNowView);
			$('a[href="#watchnow"]').addClass('selected');
		}

,		more: function() {
			this.load(MoreView);
			$('a[href="#more"]').addClass('selected');
		}

	,		account: function() {
				this.load(AccountView);
				$('a[href="#more"]').addClass('selected');
			}

	,		mediabox: function() {
				this.load(MediaBoxView);
				$('a[href="#more"]').addClass('selected');
			}

	,		favorites: function() {
				this.load(FavoritesView);
				$('a[href="#more"]').addClass('selected');
			}

	,		recordings: function() {
				this.load(RecordingsView);
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