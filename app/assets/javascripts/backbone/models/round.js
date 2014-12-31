var Round = Backbone.Model.extend({
	url: '/rounds',
	render: function() {
		var roundModel = this.model.toJSON();
		roundModel.save();
		var roundView = new RoundView({model: roundModel});
	}
});

console.log('Round');