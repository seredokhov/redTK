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
	$(window).on('load', function() {
		var media = $('.video')[0];
		var videoBlock = $('.video_block');
		//var link = $('.stop');
		console.log(media.readyState);

		function start(){
			videoBlock.fadeIn("slow");
			media.play();
		}
		function end(){
			$(this).fadeOut("slow", function(){
				videoBlock.remove();
			});
		}

		if($(document).width() > 1200) {
			media.on('readyStateChange', function() {
				if (media.readyState === 0) {
					$(media).on('canplaythrough ', start);
				}
			});			
			$(media).on('ended abort error pause', end);
		}
	});
});

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

// Галлерея инстаграм
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


// Галлерея салоны
$(function() {
	var galery = $('.gallery');
	var largeImg = galery.find('.large_photo').find('img');
	var preview = galery.find('.small_photo');
	//var smallImg = preview.find('img');

	preview.on('click', function(){
		$(this).addClass('active');
		preview.not($(this)).removeClass('active');

		var src = $(this).find('img').attr('src');
		
		if(src != largeImg.attr('src') ){
			largeImg.fadeOut(100, function(){
				largeImg.attr('src', src).fadeIn(100);

			});
		}

	})
});


// Боковое меню
$(function() {
	var list = $('.aside_menu').find('.list');
	var listLink = list.children('a');
	var ul = list.find('.list_ul');

	listLink.on('click', function(){
		list.not($(this).parent()).removeClass('active');
		ul.not($(this).siblings()).slideUp();
		$(this).parent().toggleClass('active');
		$(this).siblings('.list_ul').slideToggle();
		return false;
	})

});

// Блок ссылки
$(function() {
	var link = $('.drop_link');

	link.on('click', function(){
		$(this).parent('.catalog_drop').toggleClass('open');
		$(this).siblings('.drop_ul').slideToggle(50);
		return false;
	})
});
