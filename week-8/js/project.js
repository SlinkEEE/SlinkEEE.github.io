$(document).ready(function() {
	cow1();
	horse();
	farmer();
	// cow3();
	

	function cow1() {
		$("#cow1").animate({
		left: "5%"
		}, 400).animate({
		left: "0%"
		}, 400, cow1);
	};

	function horse() {
		var horse = $("#horse");
		$(document).click(function(){
			horse.show().animate({
			left: "100%"
		}, 4000);
		});
	};

	function farmer() {
		var farmer = $("#farmer");
		$(document).click(function() {
			farmer.animate({
				bottom: "50%"
			}, 2000).animate({
				bottom: "18%"
			}, 1000);
		});
	};

	// function cow3() {
	// 	$(document).mouseleave(function() {
	// 		$("#cow3").show().animate({
	// 			left: "100%"
	// 		}, 4000);
	// 	});
	// };
	
	
});



	