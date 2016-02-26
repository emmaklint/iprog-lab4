//ExampleView Object constructor
var DinnerView4 = function (container, model, id) {

	// Get number of guests
	guests = model.getNumberOfGuests();

	// Sends the dish into dishInfo-method 
	// which gets all the relevant info about the object.
	ingredientString = '';

	var dish = model.getDish(id);
	dishInfo(dish, model);

	// Sends number of guests and dishprice to HTML
	$("#totalNumberOfGuests").html('<h2>Ingredients for ' + guests + ' people</h2>');
	$("#totalDishPrice").html('<h2>Total: ' + model.getDishPrice(dish.id) + ' kr</h2>');
	$("#ingredients").html(ingredientString)

}

var dishInfo = function(dish, model) {
	// Creates a div which contains the objects name and description
	var dishImg = ('<div id="image" class="col-md-8"><img src="images/' + (dish.image) + '"/></div>');
	var dishText = ('<h2>' + dish.name + '</h2><p>' + dish.description + '</p>');
	$("#theDish").html(dishImg + '<div class="dishText col-md-8" id="' + dish.id + '"">' + dishText + '</div>')

	// Looks through every ingredient in an object
	// and sends it to the ingredientList-method
	for (var i in dish.ingredients) {
		ingredientInfo(dish.ingredients[i]);
	}
}
 
var ingredientInfo = function(ingredient, model) {
	// Get the ingredients cost and amount from methods in model
	var cost = ingredient.price * guests;
	var amount = ingredient.quantity * guests;

	//Creates a table which contains the ingredients name, amount, unit and cost.
    var ingrAmount = ('<td width="30%">' + amount + ' ' + ingredient.unit + '</td>')
    var ingrName = ('<td width="60%">' + ingredient.name + '</td>');
    var ingrCost = ('<td width="5%">' + cost + 'kr' + '</td>');

    ingredientString += '<tr>' + ingrAmount + ingrName + ingrCost + '</tr>';
}

