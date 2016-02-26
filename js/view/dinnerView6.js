var DinnerView6 = function (container, model) {	

	this.dinnerPrep = function(dish) {
		// Creates a div which contains the objects name, image and description
		var dishImg = ('<div class="col-md-4 dishImage"><img src="images/' + (dish.image) + '"/></div>');
		var dishName = ('<h2>' + dish.name + '</h2>');
		var dishDesc = ('<p class="description">' + dish.description + '</p>');

		// Using .append instead of .html because .html only contains the last info
		// you put in. Therefor, in this case .html would only show the last dish
		// since it can't create several items who looks the same.

		dishPrepString += '<div class="dishFinal col-md-12">' + dishImg + '<div class="col-md-8">' + dishName + dishDesc + '</div></div>';

	}

	this.update = function(){
		var menu = model.getFullMenu();
		dishPrepString = '';

		// Get number of guests and send to HTML
		var num = model.getNumberOfGuests();
		$("#numberOfGuests-6").html('My dinner: ' + num + ' people');
		$("#backButton-6").html('<button type="button" class="backButton">Go back and edit dinner</button>')


		// Send every dinner-object into dinnerPrep-method 
		// which gets all the relevant info about the objects.
		for (var i in menu) {
			this.dinnerPrep(menu[i]);
		}

		$("#dishSummary").html(dishPrepString);
	}
		
	this.update();
	model.addObserver(this);
}