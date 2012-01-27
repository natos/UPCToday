// OnDemand.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#ondemand-template').html() )

,		initialize: function() {

			var self = this;

			this.trigger('view-initialized', this);

			this.render();

			// set title
			$('#header-container h1').html('On Demand');

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			this.trigger('view-created', this);

			this.iscroll = new iScroll('ondemand-scroll');

			return this;

		}

,		unload: function() {

			this.iscroll.destroy();

			this.el.html( '' );

			this.el.trigger('view-unloaded', this);

			return this;
		}

	});

}); // define