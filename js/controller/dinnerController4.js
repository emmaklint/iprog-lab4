var DinnerController4 = function(view, model) {

$("#backButton").click(function() {
	model.removeFromPending();
	$("#dinnerView3").show();
	$("#dinnerView4").hide();

})

$("#confirmButton").click(function() {
	// Add dish to menu
	model.addDishToMenu();
	model.removeFromPending();
	$("#dinnerView3").show();
	$("#dinnerView4").hide()
})


}