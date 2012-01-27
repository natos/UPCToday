// MainNav.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main-nav')

,		main: $('#main-container')

,		initialize: function() {

			this.trigger('view-initialized', this);

			return this;

		}

,		render: function() {

			this.el.removeClass('off');

			this.main.removeClass('maximize');

			this.trigger('view-rendered', this);

			return this;

		}

,		unload: function() {

			this.el.addClass('off');

			this.main.addClass('maximize');

			this.trigger('view-unloaded', this);

			return this;
		}

	});

}); // define