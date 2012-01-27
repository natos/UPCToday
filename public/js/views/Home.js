// Home.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#home-template').html() )

,		initialize: function() {

			this.trigger('view-initialized', this);

			this.render();

			// hide back button
			$('.back.button').hide();

			// set title
			$('#header-container h1').html('UPC Today');

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			this.trigger('view-created', this);

			return this;

		}

,		unload: function() {

			this.el.html( '' );

			this.el.trigger('view-unloaded', this);

			// show back button
			$('.back.button').show();

			return this;
		}

	});

}); // define