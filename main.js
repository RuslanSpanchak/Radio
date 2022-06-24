let b = 0;

$("#right").click(function() {

	if (b == 0) {

		// $(".intro").css("background-image", "url(img/20.jpg)")
		b = 1;
		a = 3;

	} else if (b == 1) {

		// $(".intro").css("background-image", "url(img/21.jpg)")
		b = 2;
		a = 2;

	} else if (b == 2) {

		// $(".intro").css("background-image", "url(img/22.jpg)")
		b = 3;
		a = 1;

	} else if (b == 3) {

		// $(".intro").css("background-image", "url(img/19.jpg)")
		b = 0;
		a = 0;

	}

});

let a = 0;

$("#left").click(function() {

	if (a == 0) {

		// $(".intro").css("background-image", "url(img/22.jpg)")
		a = 1;
		b = 3;

	} else if (a == 1) {

		// $(".intro").css("background-image", "url(img/21.jpg)")
		a = 2;
		b = 2;

	} else if (a == 2) {

		// $(".intro").css("background-image", "url(img/20.jpg)")
		a = 3;
		b = 1;

	} else if (a == 3) {

		// $(".intro").css("background-image", "url(img/19.jpg)")
		a = 0;
		b = 0;

	}

});



