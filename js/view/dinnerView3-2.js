var DinnerView3 = function (container,model) {

	this.container=container;
	this.starter = (model.getAllDishes('starter'));
	this.main = (model.getAllDishes('main dish'));
	this.dessert = (model.getAllDishes('dessert'));


	this.allTheDish=container.find("#allDishes");

	
		for (var i = 0; i < this.starter.length; i++){
			this.allTheDish.append(
			"<div class="+'"'+"col-md-3 dishtype starter"+'"'+"id="+'"'+this.starter[i].name+'"'+"style="+'"'+"display:block"+'"'+">"
			+"<img src="+'"'+"images/"+this.starter[i].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h4 id="+'"'+"title"+'"'+">"+this.starter[i].name+"</h4>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.starter[i].description.slice(0,80)+"..."+"</p>"+"</div>"
			+"</div>");
				
};

		for (var i = 0; i < this.main.length; i++){
			this.allTheDish.append(
			"<div class="+'"'+"col-md-3 dishtype main"+'"'+"id="+'"'+this.main[i].name+'"'+"style="+'"'+"display:block"+'"'+">"
			+"<img src="+'"'+"images/"+this.main[i].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h4 id="+'"'+"title"+'"'+">"+this.main[i].name+"</h4>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.main[i].description.slice(0,80)+"..."+"</p>"+"</div>"
			+"</div>");
				
};

		for (var i = 0; i < this.dessert.length; i++){
			this.allTheDish.append(
			"<div class="+'"'+"col-md-3 dishtype dessert"+'"'+"id="+'"'+this.dessert[i].name+'"'+"style="+'"'+"display:block"+'"'+">"
			+"<img src="+'"'+"images/"+this.dessert[i].image+'"'+"id="+'"'+"image"+'"'+">"
			+"<h4 id="+'"'+"title"+'"'+">"+this.dessert[i].name+"</h4>"
			+"<div id="+'"'+"description"+'"'+">"+"<p>"+this.dessert[i].description.slice(0,80)+"..."+"</p>"+"</div>"
			+"</div>");
				
};
	
	this.whatDishToDisplay= function(someDishType){
		if(someDishType){
			for (var i = 0; i < document.getElementsByClassName("dishtype").length; i++) {
				document.getElementsByClassName("dishtype")[i].style.display = 'none';}	

			for(var i = 0; i < document.getElementsByClassName(someDishType).length; i++){
			document.getElementsByClassName(someDishType)[i].style.display = 'block';}
		}

		else{
		for(var i = 0; i< document.getElementsByClassName("dishtype").length; i++){
			document.getElementsByClassName("dishtype")[i].style.display = 'block';}
		}
	};

	

	
};













