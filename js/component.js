

// sticky header
$(document).ready(function() {
  (function(){'use strict';if($('.top-bar').length>0)
 var t=$('.top-bar').height();else t=0;$('#menu li').click(function(){if($(window).width()<1001){$('.search-parent').removeClass("active");$('.cart-parent').removeClass("active")}});var k=0;$(window).scroll(function(){if($(window).width()>0){if($(window).scrollTop()>0+t){$('.header-section').removeAttr('style').addClass('pin')}else{$('.header-section').css({top:-$(window).scrollTop()}).removeClass('pin')}if($(window).scrollTop()>150+t){$('.header-section').addClass('before')}else{$('.header-section').removeClass('before')}}else{if($(window).scrollTop()<k){$('.header-section').addClass('off').removeClass('woff').removeAttr('style');$('#menu').removeClass('in');k=0}}
 if($(window).scrollTop()>t){if(!$('.header-section').hasClass('woff')){$('.header-section').addClass('pin-start').addClass('off')}}else{$('.header-section').removeClass('pin-start').removeClass('off')}});if($(window).scrollTop()>150+t){$('.header-section').addClass('pin')}else{$('.header-section').removeAttr('style').removeClass('pin')}
 $(window).resize(function(){if($(window).width()>1000){$('.header-section').removeAttr('style')}});if($(window).scrollTop()>t){$('.header-section').addClass('off').addClass('pin-start')}else{$('.header-section').removeClass('off').removeClass('pin-start')}
 $('.menu-icon').click(function(){if($('#menu').hasClass('in')){$('.header-section').addClass('off').removeClass('woff').removeAttr('style');if($(window).scrollTop()>t){if(!$('.header-section').hasClass('woff')){$('.header-section').addClass('pin-start').addClass('off')}}else{$('.header-section').removeClass('pin-start').removeClass('off')}}else{k=$(window).scrollTop();$('.header-section').removeClass('off').addClass('woff').css({top:$(window).scrollTop()})}})})()
});



// angar tag inner page link scroll animation
// $(document).ready(function(){
//     $("#about-1,#about-2,#about-3").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top-150},800,function(){window.location.hash=hash})}})
// });



// scroll-top
$(document).ready(function() {
    (function($){"use strict";$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('.scrollup').fadeIn()}else{$('.scrollup').fadeOut()}});$('.scrollup').on("click",function(){$("html, body").animate({scrollTop:0},500);return!1})})})(jQuery)
});


$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});


$(window).load(function() {
	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");
})
        