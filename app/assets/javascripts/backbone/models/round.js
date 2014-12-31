var Round = Backbone.Model.extend({
	defaults: {
		sex: "",
		rate: "",
		hours: "",
		lbs: "",
		drinks: "",
		abv: "",
		bac: "",
	},
	url: '/rounds',
	render: function() {
		var roundModel = this.model.toJSON();
		var roundView = new RoundView({model: roundModel});
	}
});

console.log('Round');