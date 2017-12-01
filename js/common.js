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

	$(media).on('canplaythrough', function(){
		media.play();
	})



	$(media).on('ended abort error pause', function(){
		$(this).fadeOut("slow", function(){
			videoBlock.remove();
		});
	});

	/*
	link.click(function(){
		$('#video')[0].pause();
	})
	*/

})