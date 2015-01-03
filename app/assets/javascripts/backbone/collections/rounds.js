var RoundsCollection = Backbone.Collection.extend({
	model: Round,
	localStorage: new Backbone.LocalStorage('alculator'),
	url: '/rounds',
});

console.log('Rounds');