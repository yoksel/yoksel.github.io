jQuery(document).ready(function($) {

	$("body").removeClass("no-js");

	// Prevent long loading because of too many frames
	//------------------------------------------------
	
	if($(".p-hide-demo").length > 0){

		var demos = $(".post__text").find(".jsbin[data-src]");

		demos.each( function (){
			var toggle_button = "<div class=\"js--toggle-demo\"><span class=\"js--toggle-demo__text\">Демо</span>";
			$(this).before(toggle_button);

		});

		$(".js--toggle-demo").click( function () {
			var next = $(this).next(".jsbin");
			var data_src = $(next).attr("data-src");
			$(next).attr("src",data_src);
			$(next).slideToggle("slow");
			$(this).toggleClass("js--toggle-opened");
		});
	}

	// Add target marker, scroll to top by clicking on him
	//------------------------------------------------

	// $(":target").hide(); // not working, why?

	var marker = "js--target-marker";
	var marker_class = "." + marker;

	var begin_id = "#begin";

	if ( $( begin_id ).length > 0) {
		var target_marker = "<a href='" + begin_id + "' class='" + marker + "'></a>";
		$( begin_id ).before(target_marker);
	}

	function add_target_marker( anchor ){
		var anchor_id = anchor.substr(1);
		var target_elem = $("#" + anchor_id);
		var position = target_elem.position();
		var marker_position = position.top;// - $( marker_class ).height()/2;
		$( marker_class ).css({ "top" : marker_position });
		if( anchor == begin_id ){
			$(marker_class).hide();
			}
		else {
			$(marker_class).show();
			}	
			
		var top = target_elem.offset().top - 30;
		$("body").animate({scrollTop: top});
	    event.preventDefault();
	}
	
	$("a[href^='#']").click( function () {
		var target = $(this).attr("href");
		add_target_marker( target );
	});

	var current_hash = document.location.hash;
	if ( current_hash ){
		add_target_marker( current_hash  );
		}
	

});