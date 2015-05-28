var main = function () {
  "use strict";

	$(".nav_element").mouseover(function() {
		var _id = $(this).attr("id");

		console.log("."+_id+"_hover_element");
		$("."+_id+"_hover_element").fadeIn("fast");
	});

	$(".nav_element").mouseout(function() {
		var _id = $(this).attr("id");

		$("."+_id+"_hover_element").fadeOut("fast");
	});
  

}
$("document").ready(main);