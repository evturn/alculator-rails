var BarTabView = Backbone.View.extend({
	el: $('#search-results'),
	template: _.template($('#beerTabTemplate').html()),
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});