(function () {
   'use strict';
}());

$('.expand-button').click(function() {
	'use strict';

	var parent = $(this).parent().hasClass('active');

	$(this).parent().parent().find('article').removeClass('active');
	if (!parent) {
		$(this).parent().addClass('active');
	}
});

$(document).ready(function() {
	$('#video-wrapper').fitVids();
});

$(document).scroll(function(){
	'use strict';

	var o = $(document).scrollTop();
	var header = $('body > header').outerHeight();
	var create = $('section.create').offset().top - header;
	var how = $('section.how').offset().top - header;
	var watch = $('section.watch').offset().top - header;
	var about = $('section.about').offset().top - header;
	if (o >= create && o < how && !$('nav li.create').hasClass('active')) {
		$('nav li').removeClass('active');
		$('nav li.create').addClass('active');
	} else if (o >= how && o < watch && !$('nav li.how').hasClass('active')) {
		$('nav li').removeClass('active');
		$('nav li.how').addClass('active');
	} else if (o >= watch && o < about && !$('nav li.watch').hasClass('active')) {
		$('nav li').removeClass('active');
		$('nav li.watch').addClass('active');
	} else if (o >= about && !$('nav li.about').hasClass('active')) {
		$('nav li').removeClass('active');
		$('nav li.about').addClass('active');
	} else if (o < create) {
		$('nav li').removeClass('active');
	}
});

$('nav li a').click(function() {
	'use strict';

	var link = $(this).attr('href');
	link = link.substr(1);

	$('html,body').animate({
        scrollTop: $('section.' + link).offset().top - $('body > header').outerHeight()
    }, 400);
	return false;
});