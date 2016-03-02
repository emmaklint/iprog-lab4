//ExampleView Object constructor
var DinnerView4 = function (container, model, id) {
	

	this.ingredientInfo = function(ingredient, model) {
		var ingredientString = '';
		
		// Get the ingredients cost and amount from methods in model
		var cost = ingredient.price * this.guests;
		var amount = ingredient.quantity * this.guests;

		//Creates a table which contains the ingredients name, amount, unit and cost.
	    var ingrAmount = ('<td width="30%">' + amount + ' ' + ingredient.unit + '</td>')
	    var ingrName = ('<td width="60%">' + ingredient.name + '</td>');
	    var ingrCost = ('<td width="5%">' + cost + 'kr' + '</td>');

	    ingredientString += '<tr>' + ingrAmount + ingrName + ingrCost + '</tr>';
	    return ingredientString;
	}

	this.dishInfo = function(dish, model) {
		allIngredients = '';

		// Creates a div which contains the objects name and description
		var dishImg = ('<div id="image" class="col-md-8"><img src="images/' + (dish.image) + '"/></div>');
		var dishText = ('<h2>' + dish.name + '</h2><p>' + dish.description + '</p>');
		$("#theDish").html(dishImg + '<div class="dishText col-md-8" id="' + dish.id + '"">' + dishText + '</div>')

		// Looks through every ingredient in an object
		// and sends it to the ingredientList-method
		for (var i in dish.ingredients) {
			allIngredients += this.ingredientInfo(dish.ingredients[i]);
		}
	}

	this.update = function() {
		this.pendingDish = model.getPendingDish();
		this.guests = model.getNumberOfGuests();

		if (this.pendingDish !== undefined) {
			this.dishInfo(this.pendingDish, model);
			

			// Sends number of guests and dishprice to HTML
			$("#totalNumberOfGuests").html('<h2>Ingredients for ' + this.guests + ' people</h2>');
			$("#totalDishPrice").html('<h2>Total: ' + model.getDishPrice(this.pendingDish.id) + ' kr</h2>');
			$("#ingredients").html(allIngredients)		
		}
	}

	this.update();
	model.addObserver(this);

}


 


