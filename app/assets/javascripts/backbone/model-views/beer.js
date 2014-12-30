var BeerView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	template: _.template($('#beer-search-template').html()),
	render: function() {
		this.$el.html(this.template(beer.toJSON()));
		$('#search').append(this.$el);
		return this;
	}
});