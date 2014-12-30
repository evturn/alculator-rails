var LiquorView = Backbone.View.extend({
	el: $('search-container'),
	initialize: function() {
		this.listenTo(this.el, 'click #liquor-tab', this.render)
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});




console.log('liquorView')