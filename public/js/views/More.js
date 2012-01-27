// More.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#more-template').html() )

,		initialize: function() {

			var self = this;

			this.trigger('view-initialized', this);

			this.render();

			// set title
			$('#header-container h1').html('More');

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			this.trigger('view-created', this);

			return this;

		}

,		unload: function() {

			this.el.html( '' );

			this.trigger('view-unloaded', this);

			return this;
		}

	});

}); // define