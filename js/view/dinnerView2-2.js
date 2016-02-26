var DinnerView2 = function (container,model) {

	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.menuDish = container.find("#dish-name");
	this.menuPrice=container.find("#dish-cost");
	this.price = container.find("#dinnerCost");

	this.pending=model.pendingDish();


	var guests=model.getNumberOfGuests();

	
	this.update=function(){


		this.numberOfGuests.html(model.getNumberOfGuests());

		this.menuDish.empty();
		this.menuPrice.empty();
		if(this.pending.length !== 0){
			
		}

		else{
			this.menuDish.append("<div>"+"Pending" + "</div>");
			this.menuPrice.append("<div>"+"0.00" + "</div>");
		}
};
	

	model.addObserver(this);
	this.update();
	

	//this.price.append("Total cost"+ model.getTotalMenuPrice());


}
