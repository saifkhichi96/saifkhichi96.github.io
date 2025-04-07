window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
	// Hide research abstract content by default
	$('.research-abstract .content').hide();

	// Toggle visibility on container click
	$('.research-abstract').on('click', function() {
		$(this).find('.content').slideToggle();
	});

	// Check for click events on the navbar burger icon
    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    bulmaSlider.attach();
})
