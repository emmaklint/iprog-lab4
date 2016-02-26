var DinnerController3 = function(view, model) {

	$("#searchButton").click(function() {
		if ($("#typeSelect").val() === 'all dishes') {
			view.updateSearch(undefined, $("#searchInput").val());
			console.log('first')
		} else {
			view.updateSearch($("#typeSelect").val(), $("#searchInput").val());
			console.log('second')
		}
	
		makeDishClickable();
		$("#searchInput").val('');

	})

	$("#typeSelect").change(function() {
		
		if ($(this).val() === 'all dishes') {
			view.updateSearch(undefined, $("#searchInput").val());
		} else {
			view.updateSearch($(this).val(), $("#searchInput").val());
		}
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