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


// Видеозаставка

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

// Галлерея
$(function() {
	$(".inst_block .img_item").click(function(){
		var img = $(this).find('img');
		var src = img.attr('src');
		$("body").append("<div class='popup'>"+
						 "<div class='popup_bg'></div>"+
						 "<img src='"+src+"' class='popup_img' />"+
						 "<div class='close_popup'>╳</div>"+
						 "</div>"); 
		$(".popup").fadeIn(200);
		$(".popup_bg, .close_popup").click(function(){
			$(".popup").fadeOut(200);
			setTimeout(function() {
			  $(".popup").remove();
			}, 200);
		});
	});
});