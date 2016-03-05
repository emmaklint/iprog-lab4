var DinnerController3 = function(view, model) {

	$("#searchButton").click(function() {
		if ($("#typeSelect").val() === 'all dishes') {
			view.update(undefined, $("#searchInput").val());
			console.log('first')
		} else {
			view.update($("#typeSelect").val(), $("#searchInput").val());
			console.log('second')
		}
	
		//makeDishClickable();
		$("#searchInput").val('');

	})

	$("#typeSelect").change(function() {
		
		if ($(this).val() === 'all dishes') {
			model.getAllDishes('all');
		} 

		if($(this).val() === 'starter'){
			model.getAllDishes('Appetizers');
		}
		if($(this).val() === 'main dish'){
			model.getAllDishes('Main Dish');
		}

		if($(this).val()==='dessert'){
			model.getAllDishes('Desserts');
		}

	})

this.update=function(){
		$("#dishesClick").bind('click', function(event){
		console.log("klick");
		console.log($(event.target).parent().attr('id'));
		var id = $(event.target).parent().attr('id');
		model.getDish(id);
		$("#dinnerView3").hide();
		$("#dinnerView4").show()
		});	
}

model.addObserver(this);
};