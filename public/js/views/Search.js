// Search.js

define([

	'views/search/CategorySelector'

],

function(CategorySelectorView) {

	return Backbone.View.extend({

		el: $('#main')

,		template: _.template( $('#search-template').html() )

,		events: {
			"click a[href=#select-category]": "select-category-handler"
		}

,		initialize: function() {

			this.trigger('view-initialized', this);

			return this;

		}

,		render: function() {

			this.el.html( this.template() ).addClass('search');

			// set title
			$('#header-container h1').html( this.el.find('h1').remove().html() );

			this.trigger('view-created', this);

			var scroll = this.iscroll = new iScroll('inner-content');
			setTimeout(function () { scroll.refresh(); }, 0);

			// auto select radio
			var hash = window.location.hash;

			if (/ondemand/.test(hash)) { $('#ondemand-check').attr('checked','checked'); }
			if (/tvguide/.test(hash)) { $('#tvguide-check').attr('checked','checked'); }

			return this;

		}

,		unload: function() {

			this.iscroll.destroy();

			this.el.html( '' ).removeClass('search');

			this.trigger('view-unloaded', this);

			return this;
		}


		// UI Event handlers

,		"select-category-handler": function(event) {

			event.preventDefault();
			event.stopPropagation();

			this.categorySelector = this.categorySelector || new CategorySelectorView();

			if (this.categorySelector.isRendered) {
				this.categorySelector.unload();
			} else {
				this.categorySelector.render();
			}
		}

	});

}); // define