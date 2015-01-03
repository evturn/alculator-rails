var RoundView = Backbone.View.extend({
	el: $('#bac-container'),
	model: Round,
	url: '/url',
	template: _.template($('#bacTemplate').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		var attributes = this.model.toJSON();
    this.$el.append(this.template(attributes));
    return this;
	}
});

console.log('RoundView');