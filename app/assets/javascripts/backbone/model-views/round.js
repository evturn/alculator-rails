var RoundView = Backbone.View.extend({
	el: $('#bac-container'),
	template: _.template($('#bacTemplate').html()),
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	url: '/rounds',
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	}
});

console.log('RoundView');