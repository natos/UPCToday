// WatchNow.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#watchnow-template').html() )

,		initialize: function() {

			var self = this;

			this.trigger('view-initialized', this);

			this.render();

			// set title
			$('#header-container h1').html('Watch Now');

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			this.trigger('view-created', this);

			this.iscroll = new iScroll('inner-content');

			// hide main nav
			upc.mainNav.unload();

			return this;

		}

,		unload: function() {

			this.iscroll.destroy();

			this.el.html( '' );

			this.trigger('view-unloaded', this);

			// show main nav
			upc.mainNav.render();

			return this;
		}

	});

}); // define