var BeerView = Backbone.View.extend({
	tagName: 'div',
	model: Beer,
	template: _.template($("#beer-search-template").html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template(beer.toJSON()));
		$('#search').append(this.$el);
		return this;
	}
});