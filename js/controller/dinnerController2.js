var DinnerController2 = function(view, model ) {

	view.guestInput.change(function() {
		model.setNumberOfGuests(view.guestInput.val());
	})

	$("#confirmDinnerButton").click(function() {
		$("#left-column").hide()
		$("#dinnerView3").hide()
		$("#dinnerView4").hide()
		$("#dinnerView5").show()
	})
};

