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
		var target_marker = "<a href='" + begin_id + "' class='" + marker + "'><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><path id='arrow' d='M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0-0.781 0.781-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z'/></svg></a>";
		$( begin_id ).before(target_marker);
	}

	function add_target_marker( anchor ){
		if ( $(document).width() > 900 ) {
			var anchor_id = anchor.substr(1);
			if (anchor_id == "yes" || anchor_id == "no"){
				return; // switch off for demo of SVG-stacks
			}

			var target_elem = $("#" + anchor_id);
			var position = target_elem.position();
			var tag = $(target_elem).prop("tagName")
			tag = tag.toLowerCase();
			$(marker_class).attr("data-target-tag", tag);

			var marker_position = position.top;// - $( marker_class ).height()/2;
			$( marker_class ).css({ "top" : marker_position });
			if( anchor == begin_id ){
				$(marker_class).hide();
				}
			else {
				$(marker_class).show();
				}

			var top = target_elem.offset().top - 30;
			$("body").animate({scrollTop: top}, 100);
			// event.preventDefault();
		}

	}

	$("a[href^='#']").click( function (event) {
		var target = $(this).attr("href");
		add_target_marker( target );
	});

	var current_hash = document.location.hash;
	if ( current_hash ){
		// case 1: Tags page
		if ( document.location.pathname === "/tags"
			|| document.location.pathname === "/tags/") {

			show_tags ( current_hash.substr(1) );
		}
		// case2: Post page
		else {
			add_target_marker( current_hash  );
		}
	}

	// Show posts by tag on tags page
	//------------------------------------------------
	var postsByTags = $(".posts__list---by-tag .post");

	$(".tags-button").click( function () {
		var targetTag = this.dataset["targetTag"];

		postsByTags.hide();
		show_tags ( targetTag, $(this) );

		document.location.hash = targetTag;
	});

	function show_tags ( targetTag, elem ) {
		var currentTagClass = 'tags-button--current';
		var targetClass = "tag-" + targetTag;
		elem = elem || $(".tags-button--" + targetTag);

		$( "." + targetClass ).show();

		$( "." + currentTagClass ).removeClass( currentTagClass );
		elem.addClass( currentTagClass );
	}


});
