$(document).ready(function() {
	$('#submit').click(function() {
		var paragraphs = parseInt($('#paragraphs').val(),10);
		$('.ipsum').css('display','block');
		$('p:eq('+ paragraphs +')').css('display','block');
	});

});