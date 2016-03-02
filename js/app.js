$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	model.makeMenu();
	model.setNumberOfGuests(2);

	
	//And create the needed controllers and views
	var dinnerView1 = new DinnerView1($("#welcomeScreen"),model);
	var dinnerView2 = new DinnerView2($("#left-column"),model);
	var dinnerView3 = new DinnerView3($("#dinnerView3"),model);
	var dinnerView4 = new DinnerView4($("#dinnerView4"),model);
	var dinnerView5 = new DinnerView5($("#dinnerView5"), model);
	var dinnerView6 = new DinnerView6($("#dinnerView6"), model);

	var dinnerController1 = new DinnerController1(dinnerView1,model);
	var dinnerController2 = new DinnerController2(dinnerView2,model);
	var dinnerController3 = new DinnerController3(dinnerView3,model);
	var dinnerController4 = new DinnerController4(dinnerView4,model);
	var dinnerController5 = new DinnerController5(dinnerView5,model);
	var dinnerController6 = new DinnerController6(dinnerView6,model);


	masterController();

});

var masterController = function(model) {
	console.log("go")
	$("#welcomeScreen").show()
	$("#left-column").hide()
	$("#dinnerView3").hide()
	$("#dinnerView4").hide()
	$("#dinnerView5").hide()
	$("#dinnerView6").hide()
	

	}