var DinnerView2 = function (container,model) {

	var costInfo = function(dish, model) {
		var cost = model.getDishPrice();
		var dishName = ('<td width="30%">' + dish.Title + '</td>')
		var dishCost = ('<td width="30%">' + cost + ' kr</td>')

		$("#dishTable").append('<tr id="dish-nr-' + dish.RecipeID+ '">' + dishName + dishCost + '</tr>')
	}

	this.update = function(obj) {
		this.guestInput = $("#numberOfGuestsInput");
		this.guestInput.val(model.getNumberOfGuests());

		this.pending = model.pendingDish();
		console.log("Pending dish",this.pending);
		pendingString = '';
		pendingPrice = 0;
		minusPrice = 0;

		$("#dishTable").html('<tr><th>Dishname</th><th>Cost</th></tr>');
		
		var menu = model.getFullMenu();

		for (var i = 0; i < menu.length; i++) {
			costInfo(menu[i],model);
		}

		if (this.pending.length !== 0){
			for (var i = 0; i < menu.length; i++) {
				if(this.pending[0].Category == menu[i].Category){
					$("#dish-nr-" + menu[i].RecipeID).hide()
					var removeDishPrice = true;
					minusPrice = model.getDishPrice(menu[i].RecipeID);
				} 
			}


			pendingPrice = model.getDishPrice(this.pending[0].Ingredients);
			console.log("PENDING PRICE",pendingPrice);
			pendingString += '<tr><td width="30%">Pending</td><td width="30%">' + Math.round(pendingPrice) + ' kr</td>'
			$("#dishTable").append(pendingString);
		}
		
		totMenuPrice = model.getTotalMenuPrice();
		pendingAndTotalPrice = pendingPrice + totMenuPrice - minusPrice;

		$("#totalPrice").html('<p>Total: ' + Math.round(pendingAndTotalPrice)+ ' kr</p>');


	} 

	model.addObserver(this);
	this.update();

		// this.container=container;
		// this.guestInput = container.find("#numberOfGuestsInput");
		// this.pending=model.pendingDish();
		// this.menu=model.getFullMenu();
		// this.dishTable=container.find("#dishTable");

		// this.update=function(message){
		// 	this.guestInput.val(model.getNumberOfGuests());

		// if(this.menu.length !==0){
		// 	this.dishTable.append("<td>"+ this.menu[0].Title + "</td>");
			
		// }

		// if(this.pending.length !== 0){
		// 	this.pendingName.html(this.pending[0].Title+" (pending)");
		// 	this.pendingPrice.html(Math.round(model.getDishPrice(this.pending[0].Ingredients))+ " SEK");
		// }
		// else{
		// 	this.pendingName.html("Pending");
		// 	this.pendingPrice.html("0.00");
		// };

		// this.totalCost.html((Math.round(model.getTotalMenuPrice()+model.getPendingPrice())));

		// }

	
		// this.pendingName=container.find("#pendingName");
		// this.pendingPrice=container.find("#pendingPrice");
		// this.totalCost=container.find("#totalPrice");

		// model.addObserver(this);


}