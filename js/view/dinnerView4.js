//ExampleView Object constructor
var DinnerView4 = function (container, model) {


this.listIngredient=container.find("#ingredients");
this.totalGuests=container.find("#totalNumberOfGuests");
this.totalPrice=container.find("#totalDishPrice")
this.dishInfo=container.find("#theDish");
this.totalPrice=container.find("#totalDishPrice");

 this.update=function(message){
 	console.log(message);
 
 	if (message ==='penging changed'){
 	this.guests = model.getNumberOfGuests();
 	this.pending=model.pendingDish();
 	this.totalGuests.empty();
 	this.totalPrice.empty();


 	this.price=model.getPendingPrice();
	
	
	this.totalGuests.append('<h2>Ingredients for ' + this.guests + ' people</h2>');

	this.dishInfo.append('<div id="image" class="col-md-8"><img src="' + (this.pending[0].ImageURL) + '"/></div>'+
						'<div class="dishText col-md-8" id="' + this.pending[0].RecipeID+ '"">' +
						'<h3>'+this.pending[0].Title + '</h3>' +'<p>'+this.pending[0].Instructions + '</p>'+ '</div>');



	this.listIngredient.empty();
	this.displayInfo(this.pending[0]);
	this.totalPrice.html('<td>'+'SEK '+Math.round(this.price)+'</td>');
}

this.displayInfo=function(object){
	this.pending=object;
		for(x in this.pending.Ingredients){
		this.listIngredient.append("<tr>")
		this.listIngredient.append("<td>"+Math.round(this.pending.Ingredients[x].Quantity*this.guests)+"</td>");

		this.listIngredient.append("<td>"+" "+ this.pending.Ingredients[x].Unit+" "+"</td>");
	
		this.listIngredient.append("<td>"+this.pending.Ingredients[x].Name+"</td>");
		this.listIngredient.append("<td>"+" "+Math.round(this.pending.Ingredients[x].Quantity)+ " SEK"+ "</td>");
		this.listIngredient.append("</tr>");
		}
}
}
	model.addObserver(this);  

}
 


