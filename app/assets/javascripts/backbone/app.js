
$(function() {

	$('#container').on('click #bac-submit', 
		function(e) {
			e.preventDefault();
			$alculator = $('#alculator');
			$.ajax({
	        url: "/rounds",
	        method: 'POST',
	        data: { round: {
						sex:      $alculator.find("input[value='name']").val();
						hours:    $alculator.find("input[name='hours']").val();
						lbs:	 		$alculator.find("input[name='lbs']").val();
						drinks: 	$alculator.find("input[name='drinks']").val();
						abv: 			$alculator.find("input[name='abv']").val();
						}
					},
					calculate: function(model) {
						rate:      sex === 'male' ? 0.73 : 0.66;
						var bevOz = drinks * 12;
						var alcOz = bevOz * (abv * 0.01);
						var step1 = (alcOz * 5.14);
						var step2 = (lbs * rate);
						var step3 = (step1 / step2);
						var step4 = (0.015 * hours);
						var step5 = (step3 - step4);
						return step5;
						model.push({bac: step5})
					},
					success: function(data) {
						console.log(data);
						var round = new Round(data);
						round.calculate();
						console.log(round);
						round.save()
						var roundView = new RoundView({
							model: round
						});
						$('#bac-container').html(roundView.render().$el);
					}
		});
	});

});




		
