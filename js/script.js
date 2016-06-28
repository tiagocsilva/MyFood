$(document).ready(function() {
	var hg = $(window).height();
	if(hg > 380) {
		$("header").height(hg);
	}	
	if(hg > 600) {
		$("#about").height(hg);
		$("#contact").height(hg - $("footer").height());
	}
});	

$(document).ready(function($) { 
    $("nav a").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
   });
});