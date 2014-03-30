$(document).ready(function() {
	var content = 60;
	$(".first").click(function() {
		if(content < 1) {
			$("#right-content").animate({left:'-60%'});
			content = 60;
		} else {
			$("#right-content").animate({left:'0%'});
			content = 0;
		}
	});
});