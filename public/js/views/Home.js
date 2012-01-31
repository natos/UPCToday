// Home.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#home-template').html() )

,		initialize: function() {

			this.trigger('view-initialized', this);

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			// set title
			$('#header-container h1').html( this.el.find('h1').remove().html() );

			this.trigger('view-created', this);

			// hide back button
			$('.back.button').addClass('off');

			return this;

		}

,		unload: function() {

			this.el.html( '' );

			this.trigger('view-unloaded', this);

			// show back button
			$('.back.button').removeClass('off');

			return this;
		}

	});

}); // define