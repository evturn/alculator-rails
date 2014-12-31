var roundModel = new Round();
var startRoundView = new RoundView({model: roundModel});
var alculatorView = new AlculatorView();

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

	$('#alculator').on('click', '#bac-submit', function(e){
    e.preventDefault();
    $calculator = $('#alculator');
    $.ajax({
        url: "/rounds",
        method: 'POST',
        data: { round: {
            sex: $calculator.find("input[name='name']").val(),
            lbs: $calculator.find("input[name='lbs']").val(),
            hours: $calculator.find("input[name='hours']").val(),
            abv: $calculator.find("input[name='abv']").val(),
            drinks: $calculator.find("input[name='drinks']").val()
          }
        },
      success: function(data) {
        console.log(data)
        var round = new Round(data);
        var roundView  = new RoundView({ model: round });
        $('#bac-container').html(roundView.render().$el);
      }
    });
  });

});

console.log('app');
