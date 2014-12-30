var Beer = Backbone.Model.extend({
	defaults: {
		name: "",
		desc: "",
		abv: "",
		icon: "",
	},
	url: '/beers',
	render: function() {
		var beerModel = this.model.toJSON();
		var beerView new BarTabView({model: beerModel});
	}
});