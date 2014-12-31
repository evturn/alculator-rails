var RoundView = Backbone.View.extend({
	el: $('#bac-container'),
	template: _.template($('#bacTemplate').html()),
	initialize: function() {
		this.render();
	},
	url: '/rounds',
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

console.log('RoundView');