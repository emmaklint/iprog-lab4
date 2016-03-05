/*var DinnerView3 = function (container,model) {

	var dishInfo = function(dish, model) {
		var dishImg = ('<img src="images/' + (dish.ImageURL) + '"/>');
		var dishName = ('<h4>' + dish.Title + '</h4>');
		var dishDesc = ("<p>" + dish.Instructions.slice(0,85) + "..."+"</p>");

		$(".right-content-3").append('<div class="clickDish col-md-4" id="' + dish.id + '">' + dishImg + dishName + dishDesc + '</div>')
	}
	
	
	this.getDishes = function(titleKeyword) {	
		var allDishes = model.getAllDishes(titleKeyword);
	
		for (var i = 0; i < allDishes.length; i++) {
			dishInfo(allDishes[i]);
		}
		
	}

	this.updateSearch = function(titleKeyword) {
		$(".right-content-3").empty();
		this.getDishes(titleKeyword);
	} 

	//model.getAllDishes('all');
	

}
*/


var DinnerView3 = function (container,model) {

	this.dishes = container.find(".right-content-3");


	this.update=function(message){

		if(message=='All dishes'){


		this.allDishes = model.allDish();
		//console.log(this.allDishes);
		this.dishes.empty();
		for (var x = 0; x < this.allDishes.Results.length; x++){


		this.dishes.append(
			'<div class="clickDish col-md-4" id="' + this.allDishes.Results[x].RecipeID+ '">' + 
			'<img src="'+ this.allDishes.Results[x].ImageURL + '"/>'+ 
			'<h4>'+ this.allDishes.Results[x].Title + '</h4>' 
			+'</div>');

	}
}

	};
	model.addObserver(this);
};




