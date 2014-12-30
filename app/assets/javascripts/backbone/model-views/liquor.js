var LiquorView = Backbone.View.extend({
	el: $('#search-container'),
	initialize: function() {
		$('#liquor-tab').on('click', this.render());
	},
	template: _.template($('#liquorSearchTemplate').html()),
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});




console.log('liquorView')