//ExampleView Object constructor
var ExampleView = function (container,model) {
	
	var startGuest = 2;
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	

	// model.makeObservers();
	model.addObserver(this);
	model.setNumberOfGuests(startGuest);
	//model.makeObserver();
	
	this.update=function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}


	
}
 
