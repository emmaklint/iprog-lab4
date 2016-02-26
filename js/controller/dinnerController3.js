var DinnerController3 = function(view, model) {

	$("#searchButton").click(function() {
		view.updateSearch($("#typeSelect").val(), $("#searchInput").val());
		makeDishClickable();
		$("#searchInput").val('');

	})

	$("#typeSelect").change(function() {
		view.updateSearch($(this).val(), $("#searchInput").val());
		makeDishClickable();
	})

	var makeDishClickable = function() {
		
		$(".clickDish").click(function(){
		var id = $(this).attr('id');
		model.addToPending(id);
		$("#dinnerView3").hide();
		$("#dinnerView4").show()
		DinnerView4($("#dinnerView4"), model, id);
		})

	}

	makeDishClickable();
};