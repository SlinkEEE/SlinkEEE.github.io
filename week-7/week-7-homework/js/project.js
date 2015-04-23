$(document).ready(function () {
	$("#hamburger").click(function() {
		$(".innernav").slideToggle(500);
		$(".innernav").show();
	});

});

// $(window).resize(function() {
// 	if ($(window).width() > 1000) {
// 		$("innernav").show();
// 	else {
// 		$("innernav").hide();
// 	};
// });
