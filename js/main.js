$(document).ready(function() {
	$('.showMenu').on('click', function(event) {
		event.preventDefault();
		$('.navbar ul').toggleClass('active');
	});
});