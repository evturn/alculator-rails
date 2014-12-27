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
			var bevOz = drinks * 12;
			var alcOz = bevOz * (abv * 0.01);
			var step1 = (alcOz * 5.14);
			var step2 = (lbs * rate);
			var step3 = (step1 / step2);
			var step4 = (0.015 * hours);
	},
});