//ExampleView Object constructor
var DinnerView5 = function (container, model) {

	this.dinnerCost = function(dish, model) {
		// Sends dish to a method which calculate the
		// cost for the dish
		var cost = model.getDishPrice(dish.id);

		// Creates a div which contains the objects name, image and total cost
		var dishImg = ('<img src="images/' + (dish.image) + '"/>');
		var dishName = ('<h2>' + dish.name + '</h2>');
		var dishCost = ('<p class="cost">' + cost + " kr</p>");

		costSummaryString += '<div class="dish col-md-4">' + dishImg + '<div id="dishText">' + dishName + dishCost + '</div></div>';
	}

	this.update = function(){
		var menu = model.getFullMenu();
		costSummaryString = '';

		// Get number of guests and send to HTML
		var num = model.getNumberOfGuests();
		$("#numberOfGuests-5").html('My dinner: ' + num + ' people');
		$("#backButtonDiv-5").html('<button id="backButton-5" type="button" class="backButton">Go back and edit dinner</button>')
		
		

		// Send every dinner-object into dinnerCost-method 
		// which gets all the relevant info about the objects.
		for (var i in menu) {
			this.dinnerCost(menu[i], model);
			}

		$("#costSummary").html(costSummaryString);

		// Gets the menus total cost and send to HTML
		$("#totalCost").html('<p>Total: ' + model.getTotalMenuPrice() + ' kr</p>')

	}

	this.update();
	model.addObserver(this);

}
 
