var BeerView = Backbone.View.extend({
	tagName: 'div',
	initialize: function() {
	template: _.template($("#beer-search-template").html()),
		this.render();
	},
	render: function() {
		this.$el.html(this.template);
		$('#search').append(this.$el);
		return this;
	}
});

console.log('BeerView');