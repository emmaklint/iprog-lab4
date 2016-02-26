var DinnerView2 = function (container,model) {

	var costInfo = function(dish, model) {
		var cost = model.getDishPrice(dish.id);
		var dishName = ('<td width="30%">' + dish.name + '</td>')
		var dishCost = ('<td width="30%">' + cost + ' kr</td>')

		$("#dishTable").append('<tr id="dish-nr-' + dish.id + '">' + dishName + dishCost + '</tr>')
	}

	this.update = function(obj) {
		this.guestInput = $("#numberOfGuestsInput");
		this.guestInput.val(model.getNumberOfGuests());

		this.pending = model.pendingDish();
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
				if(this.pending[0].type == menu[i].type){
					$("#dish-nr-" + menu[i].id).hide()
					var removeDishPrice = true;
					minusPrice = model.getDishPrice(menu[i].id);
				} 
			}

			pendingPrice = model.getDishPrice(this.pending[0].id);
			pendingString += '<tr><td width="30%">Pending</td><td width="30%">' + pendingPrice + ' kr</td>'
			$("#dishTable").append(pendingString);
		}
		
		totMenuPrice = model.getTotalMenuPrice();
		pendingAndTotalPrice = pendingPrice + totMenuPrice - minusPrice;

		$("#totalPrice").html('<p>Total: ' + pendingAndTotalPrice + ' kr</p>');

	} 

	this.update();
	model.addObserver(this);
}
