var Beers = Backbone.Collection.extend({
	url: '/beers',
	model: Beer,
});