//DinnerModel Object constructor
var DinnerModel = function() {

	this.number=2;
	var observers=[];
	var pending=[];

	this.addObserver = function(observer) {
		observers.push(observer);
	}

	// Call the update method on all the observers in the array
	this.notifyObserver = function(obj) {
		for (var i=0; i<observers.length; i++) {
			observers[i].update(obj);
		}
	}

	this.makeMenu = function() {
		this.menu = [];
	}

	this.setNumberOfGuests = function(num) {
		this.number = num;
		if (this.number <= 0){
			this.number=0;
		}
		this.notifyObserver();
	}

	// should return 
	this.getNumberOfGuests = function() {
		return this.number;
		}

	//Tanken är att om vi klickar på en dish, läggs den i pending tills vi klickas confirm dish (skickas då vidare till den sidan vid onklick) 
	this.addToPending = function(dish) {
		pending.push(dish);
		console.log(dish);
		this.notifyObserver('penging changed');
	}	

	this.removeFromPending = function(){
		while(pending.length > 0) {
    		pending.pop(); //Removes the last element of an array, and returns that element
    		this.notifyObserver();
			}
		}


	this.pendingDish = function(){
		return pending;
	}


	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return this.getDish(this.menu["Category"]);
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return this.menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {

		var listOfIngredients = [];

		for (var i = 0; i < this.menu.length; i++) {
			var menuItem = this.menu[i];
			for (var j=0; j < menuItem.Ingredients.length; j++) {
				listOfIngredients.push(menuItem.Ingredients[j]);
			}
		}

		return listOfIngredients;
	}



	this.getDishPrice = function(dish){
		var price = 0;
		var guests = this.getNumberOfGuests();
		for (x in dish){
		var price = price + dish[x].Quantity;
			}
		return price*guests;
		this.notifyObservers();
	};

	this.getPendingPrice = function(){	
			var pendingPrice = 0;
			if (pending.length !== 0){
			for(x in pending[0].Ingredients){
				var pendingPrice = pendingPrice + pending[0].Ingredients[x].Quantity;
			};
			var pendingPrice = pendingPrice*this.getNumberOfGuests();
		
			return pendingPrice;
		
		}
		else{return 0}
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var listOfIngredients = this.getAllIngredients();
		var cost=0;
			for (i in listOfIngredients) {
				cost = cost+listOfIngredients[i].Quantity;
			}

		var guests=this.getNumberOfGuests();
		return cost*guests;
	}
	

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function() {
		var addDish = pending;
		 for (var i = 0; i < this.menu.length; i++) {
		 	var menuDish = this.menu[i];
		  	if (addDish[0].Category == menuDish.Category) {
		  		this.removeDishFromMenu(menuDish[i]);
		  	}
		 }
	
		this.menu.push(addDish[0]);
		this.notifyObserver();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function() {
		var removeDish = pending;
		var index = this.menu.indexOf(removeDish);
		this.menu.splice(index);
		this.notifyObserver();
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	

	this.getAllDishes = function (titleKeyword) {
		var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
		if(titleKeyword){
		var url = "http://api.bigoven.com/recipes?pg=1&rpp=8&title_kw="
                  + titleKeyword 
                  + "&api_key="+apiKey;
              }
        if(titleKeyword=='all'){
       		var url = "http://api.bigoven.com/recipes?pg=1&rpp=8&api_key="+apiKey;
        }
        var model =  this;
     	$.ajax({
        	type: "GET",
        	dataType: 'json',
        	cache: false,
        	url:url,
        	success: function(data){
        		//console.log(data);
        		model.allDishes = data;
        		model.notifyObserver('All dishes');
        	},
        	error: function(){
        		console.log('Error in getAllDishes function');
        	}
        });
		}

	this.allDish=function(){
		return this.allDishes;
	}	


	

	//function that returns a dish of specific ID
	this.getDish = function (id) {
		var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
		var RecipeID = id;
		var url = "http://api.bigoven.com/recipe/" + RecipeID + "?api_key="+apiKey;

		var model=this;

		$.ajax({
         	type: "GET",
         	dataType: 'json',
         	cache: false,
         	url: url,
         	success: function (data) {
            	console.log(data);
            	model.getOneDish=data;
				model.addToPending(data);
				
            },

            error:function(){
            	console.log('Error in getDish function');
            }
         });

}

	// this.getOne=function(){
	// 	return this.getOneDish;
	// }



};


