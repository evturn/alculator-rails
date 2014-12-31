
$(function() {

var beerView = new BeerView();
var bacMeterView = new BacMeterView();

	$('#liquor-tab').on('click',
		function(e) {
			e.preventDefault();
			var liquorView = new LiquorView();
	});

	$('#wine-tab').on('click',
		function(e) {
			e.preventDefault();
			var wineView = new WineView();
	});

	$('#beer-tab').on('click',
		function(e) {
			e.preventDefault();
			var beerView = new BeerView();
	});

	$('#beer-search').on('submit', function(e) {
		e.preventDefault();
		beerQuery = $('#beer-query').val();
		$.ajax({
			url: '/beers',
			method: 'get',
			data: {
				query: beerQuery
			},
			dataType: 'JSON',
			success: function(data) {
				beer = new Beer(data);
				console.log(beer);
				var view = new BarTabView({model: beer});
			}
		});
	});

});

console.log('app');
