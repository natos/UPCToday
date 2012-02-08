// CategorySelector.js

define([

],

function() {

	return Backbone.View.extend({

		el: $('<div>')

,		tag: "div"

,		isRendered: false

,		template: _.template( $('#categoryselector-template').html() )

,		events: {
			"click a[href=#close]": "close"
		}

,		initialize: function() {

			this.trigger('view-initialized', this);

			return this;

		}

,		render: function() {

			this.el.attr("id","category-selector").html( this.template() ).appendTo('body');

			this.trigger('view-created', this);

			this.isRendered = true;

			return this;

		}

,		unload: function() {

			this.el.detach();

			this.trigger('view-unloaded', this);

			this.isRendered = false;

			return this;
		}

		// UI Event handlers
,		close: function(event) {

			event.preventDefault();
			event.stopPropagation();

			this.unload();
		}
	});

}); // define