function main() {
	//hide elements
	$('.header').hide;
	$('.centreimage').hide;
	$('.bodyparagraph').hide;
	
	//fade in elements
	$('.header').fadeIn(1000);
	$('.centreimage').fadeIn(2000);
	$('.bodyparagraph').fadeIn(4000);
}

$(document).ready(main);