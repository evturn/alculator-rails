var RoundView = Backbone.View.extend({
	tagName: 'div'
	className: '#bac-container'
	template: _.template($('bac-template').html()),
	render: function() {
		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	events: {
		'click #bac-submit': 'calculate'
	},
	calculate: function() {
		
	}
});