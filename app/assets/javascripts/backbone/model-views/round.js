var RoundView = Backbone.View.extend({
	tagName: 'div',
	template: _.template($('#bacTemplate').html()),
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	},
});

console.log('RoundView');