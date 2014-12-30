var BarTabView = Backbone.View.extend({
	el: $('#search-results'),
	template: _.template($('#beerTabTemplate').html())
});