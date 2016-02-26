var DinnerView3 = function (container,model) {

	var dishInfo = function(dish, model) {
		var dishImg = ('<img src="images/' + (dish.image) + '"/>');
		var dishName = ('<h4>' + dish.name + '</h4>');
		var dishDesc = ("<p>" + dish.description.slice(0,85) + "..."+"</p>");

		$(".right-content-3").append('<div class="clickDish col-md-4" id="' + dish.id + '">' + dishImg + dishName + dishDesc + '</div>')
	}
	
	
	this.getDishes = function(type, filter) {
		var allDishes = model.getAllDishes(type, filter);

		for (var i = 0; i < allDishes.length; i++) {
			dishInfo(allDishes[i]);
		}
	}

	this.updateSearch = function(type, filter) {
		$(".right-content-3").empty();
		this.getDishes(type, filter);
	} 

	this.getDishes($("#typeSelect").val());
	

}



