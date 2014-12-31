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
	url: '/rounds'
});

console.log('Round');