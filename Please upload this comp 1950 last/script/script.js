$(document).ready(function() {
	var content = 60;
	$(".first").click(function(){
		if(content < 1) {
			$("#right-content").animate({left:'-60%'});
			$("#docbox").animate({left:'0%'});
			content = 60;
		} else {
			$("#right-content").animate({left:'0%'});
			$("#docbox").animate({left:'60%'});
			content = 0;
		}
		
        
	});

	
	$("#second").click(function(){
		if(content < 1) {
			$("#quicknav").animate({left:'-60%'});
			$("#docbox").animate({left:'0%'});
			content = 60;
		} else {
			$("#quicknav").animate({left:'0%'});
			$("#docbox").animate({left:'60%'});
			content = 0;
		}
	});

	
});