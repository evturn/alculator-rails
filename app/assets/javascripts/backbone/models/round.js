var Round = Backbone.Model.extend({
	defaults: {
		sex: '',
		hours: '',
		lbs: '',
		drinks: '',
		abv: '',
		bac: '',
	},
	url: '/rounds',
	localStorage: true,
});

console.log('Round');