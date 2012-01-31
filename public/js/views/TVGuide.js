// TVGuide.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#tvguide-template').html() )

,		initialize: function() {

			this.trigger('view-initialized', this);

			return this;

		}

,		render: function() {

			this.el.html( this.template() );

			// set title
			$('#header-container h1').html( this.el.find('h1').remove().html() );

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