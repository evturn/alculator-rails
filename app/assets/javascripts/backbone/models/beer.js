var Beer = Backbone.Model.extend({
	url: '/beers',
	render: function() {
		var beerView = new BeerView({ model: this })
	}
});