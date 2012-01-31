// MainNav.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main-nav')

,		main: $('#main-container')

,		back: $('.back.button')

,		initialize: function() {

			this.trigger('view-initialized', this);

			return this;

		}

,		render: function() {

			this.el.removeClass('off');

			this.main.removeClass('maximize');

			// Show main nav, then hide back button
			this.back.addClass('off');

			this.trigger('view-rendered', this);

			return this;

		}

,		unload: function() {

			this.el.addClass('off');

			this.main.addClass('maximize');

			// Hide main nav, then show back button
			this.back.removeClass('off');

			this.trigger('view-unloaded', this);

			return this;
		}

	});

}); // define