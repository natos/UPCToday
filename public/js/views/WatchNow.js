// WatchNow.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#watchnow-template').html() )

,		initialize: function() {

			this.trigger('view-initialized', this);

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			// set title
			$('#header-container h1').html( this.el.find('h1').remove().html() );

			this.trigger('view-created', this);

			var scroll = this.iscroll = new iScroll('inner-content');
			setTimeout(function () {
				scroll.refresh();
			}, 0);

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