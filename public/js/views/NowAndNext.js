// NowAndNext.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#nowandnext-template').html() )

,		initialize: function() {

			var self = this;

			this.trigger('view-initialized', this);

			this.render();

			// set title
			$('#header-container h1').html('Now & Next');

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			this.trigger('view-created', this);

			// hide main nav
			upc.mainNav.unload();

			this.iscroll = new iScroll('inner-content');

			return this;

		}

,		unload: function() {

			this.iscroll.destroy();

			this.el.html( '' );

			// show main nav
			upc.mainNav.render();

			this.trigger('view-unloaded', this);

			return this;
		}

	});

}); // define