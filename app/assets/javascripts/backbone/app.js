
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
					success: function() {

					}
		});
	});

});




		
