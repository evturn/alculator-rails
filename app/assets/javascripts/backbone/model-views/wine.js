var WineView = Backbone.View.extend({
	el: $('#search-container'),
	initialize: function() {
		this.render();
	},
	template: _.template($('#wineSearchTemplate').html()),
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});




console.log('WineView')