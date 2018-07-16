$(document).ready(function () {
	/*Sticky nav*/
	var nav = $('.navbar');
    if ($(window).scrollTop() > 10){
        nav.addClass("sticky")
    }	
	$(window).scroll(function () {
		var scrollTop = 220;
		if ($(window).scrollTop() >= scrollTop) {
			if (!nav.hasClass("sticky")) {
				nav.addClass("sticky")
			}
		}
		else{
			$('.navbar').removeClass("sticky");
		}
	})

	$('.animated-icon1').click(function () {
		$(this).toggleClass('open');
	});

	$(document).on('click', '.navbar a[href^="#"]', function (e) {
		e.preventDefault();
		console.log($(this).attr("class"))
		minusVal = 80;
        var href = $.attr(this, 'href');
        if($(".navbar-collapse").hasClass("in")){
            $(".animated-icon1").trigger("click");
        }
		$('html, body').animate({
			scrollTop: $(href).offset().top - minusVal
		}, 300);
	});
	
	/*Carousel*/
	$(".owl-carousel").owlCarousel({
		items: 4,
		margin: 20,
		autoHeight: true,
		dots: true,
		loop: true
	});
	
	/*Responsive tabs*/
	var $tabs = $('#horizontalTab');
	$tabs.responsiveTabs({
		rotate: false,
		startCollapsed: 'accordion',
		collapsible: 'accordion',
		setHash: true,
		disabled: [3, 4],
		click: function (e, tab) {
			$('.info').html('Tab <strong>' + tab.id + '</strong> clicked!');
		},
		activate: function (e, tab) {
			$('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
		},
		activateState: function (e, state) {
			//console.log(state);
			$('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
		}
	});
});