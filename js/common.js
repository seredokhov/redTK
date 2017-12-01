$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

// Видеозаставка
//canplaythrough

$(function(){
	var media = $('.video')[0];
	var videoBlock = $('.video_block');
	//var link = $('.stop');

	if($(document).width() > 1200) {
		$(media).on('canplaythrough', function(){
			videoBlock.fadeIn("slow");
			media.play();
		})
		$(media).on('ended abort error pause', function(){
			$(this).fadeOut("slow", function(){
				videoBlock.remove();
			});
		});
	}
	else {
		videoBlock.remove();
	}


//.menu_link

})


// Мобильное меню

$(function(){
	var link = $('.menu_link');
	var menu = $('.main_nav');
	var overlay = $('.overlay');

	link.on('click', function(){
		menu.add($(this)).toggleClass('open');
		overlay.fadeToggle();
		return false;
	})
	overlay.on('click', function(){
		$(this).fadeOut();
		menu.add(link).removeClass('open');
	})

})