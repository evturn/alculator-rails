
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


	$('#bac-submit-btn').on('click', function() {
		console.log('Heeyutz!');
		lbs = document.getElementById('lbs').value;
		hours = document.getElementById('hours').value;
		drinks = document.getElementById('drinks').value;
		abv = document.getElementById('abv').value;	
		sex = document.getElementById('male').value;
		console.log(lbs);
		console.log(hours);
		console.log(drinks);
		console.log(abv);
		console.log(sex);
		rate = sex === 'male' ? 0.73 : 0.66;
		bevOz = drinks * 12;
		alcOz = bevOz * (abv * 0.01);
		metricOz = alcOz * 5.14;
		metabolism = lbs * rate;
		subLevel = metricOz /  metabolism;
		soberingRate = 0.015 * hours;
		bac = subLevel - soberingRate;
		return bac;
		
	});
	});

console.log('app');