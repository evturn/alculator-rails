
$(function() {

var beerView = new BeerView();
var bacMeterView = new BacMeterView();
var alculatorView = new AlculatorView();

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

	$('#bac-submit-btn').on('click', function(e) {
		e.preventDefault();
		$alculator = $('#alculator');
		$.ajax({
			url: "/rounds",
			method: 'post',
			data: {
				round:
			}

		});
		console.log('sup');
	});

});

console.log('app');
