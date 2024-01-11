$(document).ready(function(){
	$('.mobile_menu_icon').click(function(){
		$('.nav').toggle(function(){
			$('.header_medel').css({
				'margin':'-200px'
			});
			$('.header_bottom').css({
				'margin-top':'260px'
			});
		});
	});
	$('form input[type="text"]:nth-child(2)').click(function(){
		$(this).css({
			'text-transform':'lowercase'
		});
	});
	$('form input[type="submit"]').click(function(){
		$(this).text('Request Sent')
	});
});