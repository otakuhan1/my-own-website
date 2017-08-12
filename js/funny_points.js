$(document).ready(function(){
	var total = 0;
	$("#minus").click(function(){
		total -= 1;
		$("#points").text(total);
	});
	$("#plus").click(function(){
		total += 1;
		$("#points").text(total);
	});
	$("#rules").click(function(){
		$("#rules-list").toggle();
	});

});