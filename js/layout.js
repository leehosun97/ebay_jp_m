$(function(){
	/* goods setting */
	$('.result_goods .rg_head .set_area .btn').on('click',function(){
		$(this).toggleClass('on');
		$(this).next('.set_list').fadeToggle();
	});
	$('.result_goods .rg_head .set_area .set_list a').on('click',function(){
		$('.result_goods .rg_head .set_area .btn').removeClass('on');
		$(this).closest('.set_list').fadeOut();
	});

	/* list type change button */
	$('.result_goods .rg_head .r_area').children('.btn').on('click',function(){
		if ($(this).hasClass('btn_grid')) {
			$(this).removeClass('btn_grid');
			$('.rg_item_list .rg_list').removeClass('type_list');
			$(this).addClass('btn_list');
			$('.rg_item_list .rg_list').addClass('type_grid');
		} else {
			$(this).removeClass('btn_list');
			$('.rg_item_list .rg_list').removeClass('type_grid');
			$(this).addClass('btn_grid');
			$('.rg_item_list .rg_list').addClass('type_list');
		}
	});

	/* range_slider */
	$( "#price_slider" ).slider({
		range: true,
		min: 0,
		max: 5000,
		/*slide: function( event, ui ) {
			$( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}*/
	});
	$('#price_slider .ui-state-default').last().css("left","100%");
	$('#price_slider .ui-widget-header').css("width","100%");

	/* filter popup open */
	function filterOpen() {
		$('.fix_filter').fadeIn();
		$('.fix_filter .content').animate({
			left: '55px',
			right: '0'
		},500);
		$('html, body').css({"overflow": "hidden", "height": "100%"});
	}
	function filterClose() {
		$('.fix_filter').fadeOut();
		$('.fix_filter .content').animate({
			left: 'auto',
			right: '-500px'
		},500);
		$('html, body').css({"overflow": "auto", "height": "auto"});
	}
	$('.filter_con .ft_tit').on('click',function(){
		if ($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next('ul').slideUp();
		} else {
			$(this).closest('li').siblings('li').find('.ft_tit').removeClass('on');
			$(this).closest('li').siblings('li').find('ul').slideUp();
			$(this).addClass('on');
			$(this).next('ul').slideDown();
		}
	});
});

function btnTop() {
	$('body,html').animate({
	 scrollTop: 0
	}, 500);  
	return false;
}

/* 디바이스 사이즈 */
var windowWidth = $( window ).width();
if(windowWidth > 768) {
	$('html').addClass('pc');
} else if (windowWidth <= 768 && windowWidth > 640) {
	$('html').addClass('tablet');
} else {
	$('html').addClass('mobile');				
}

/* 스크롤 */
var didScroll;
var navScroll;

$(window).scroll(function(event){
	didScroll = true;
	navScroll = true;
}); 

setInterval(function() { 
	if (didScroll) { 
		hasScrolled(); 
		didScroll = false; 
	} 
}, 250);

function hasScrolled() {
	var $st = $(this).scrollTop();
	/*if ( $st > 351 ){
		$('.tablet header').addClass('hover');
	} else {
		$('.tablet header').removeClass('hover');
	}

	if ( $st > 169 ){
		$('.mobile header').addClass('hover');
	} else {
		$('.mobile header').removeClass('hover');
	}*/

	if ( $st > 45 ){
		$('.tablet header, .mobile header').addClass('fTop');
	} else {
		$('.tablet header, .mobile header').removeClass('fTop');
	}
}

setInterval(function() { 
	if (navScroll) { 
		navScrolled(); 
		navScroll = false; 
	} 
});

function navScrolled() {
	var $st = $(this).scrollTop();
	if ( $st > 492 ){
		$('.pc .sub_nav').addClass('fixed');
	} else {
		$('.pc .sub_nav').removeClass('fixed');
	}
	
	if ( $st > 161 ){
		$('.pc .member .sub_nav').addClass('fixed');
		$('.pc .mypage .sub_nav').addClass('fixed');
	} else {
		$('.pc .member .sub_nav').removeClass('fixed');
		$('.pc .mypage .sub_nav').removeClass('fixed');
	}
}

/* mobile_gnb */
function menuBtn() {
	$('html').css({'overflow': 'hidden', 'height': '100%'});
	$('.gnb_wrap').animate({
		"z-index": "100",
		opacity: "1",
	}, 500);
}

function menuClose() {
	$('html').css({'overflow': 'auto', 'height': 'auto'});
	$('.gnb_wrap').animate({
		"z-index": "-1",
		opacity: "0",
	}, 500);
}