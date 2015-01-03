
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
		var sex = document.getElementById('sex').value;
		var lbs = document.getElementById('lbs').value;
		var hours = document.getElementById('hours').value;
		var drinks = document.getElementById('drinks').value;
		var abv = document.getElementById('abv').value;	
		var round = new Round({sex: sex, lbs: lbs, hours: hours, drinks: drinks, abv: abv});
		});
	});

	function calculate() {
		var rate = sex === 'male' ? 0.73 : 0.66;
		var bevOz = drinks * 12;
		var alcOz = bevOz * (abv * 0.01);
		var metricOz = alcOz * 5.14;
		var metabolism = lbs * rate;
		var subLevel = metricOz /  metabolism;
		var soberingRate = 0.015 * hours;
		var bac = subLevel - soberingRate;
	};
console.log('app');