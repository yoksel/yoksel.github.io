jQuery(document).ready(function($) {
	// Prevent long loading because of too many frames
	if((".p-hide-demo").length > 0){
		var demos = $(".post__text").find(".jsbin[data-src]");

		demos.each( function (){
			var toggle_button = "<div class=\"js--toggle-demo\"><span class=\"js--toggle-demo__text\">Демо</span>";
			$(this).before(toggle_button);

		});

		$(".js--toggle-demo").click( function (){
			var next = $(this).next(".jsbin");
			var data_src = $(next).attr("data-src");
			$(next).attr("src",data_src);
			$(next).slideToggle("slow");
			$(this).toggleClass("js--toggle-opened");
		});
	}
});