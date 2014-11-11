/* Smooth scrolling for Back Top link */
Mirai.query('#back-top').click(function(evt) {
  evt.preventDefault();
  Mirai.query('html,body').animate({scrollTop:0}, '800', 'swing');
});




Mirai.query('#engine_mashup').affix({
		offset: {
		top: Mirai.query("#header").height() + Mirai.query("#engine").height()
		}
});


function addNumOfPhotos () {
  jQuery('#main').find('.photo_title').each(function(){
	var NumPhotos = jQuery(this).find('.ngg-gallery-thumbnail-box').length;
	jQuery(this).find('.n_photos').text(NumPhotos);
    jQuery(this).find('.ngg-gallery-thumbnail-box:first-child').addClass('first-child');
    if(NumPhotos <= 1){
    	jQuery(this).find('.n_photos').css('display', 'none');
    }
  })
}

jQuery(document).ready(function(){  
    if(jQuery('.ngg-galleryoverview').length > 0) {
      addNumOfPhotos ();
    };  
});





if (!Mirai.query('body').hasClass('bookingstep1')) {
  
  var engineWidth = Mirai.query('.engine_mashup').innerWidth();
  Mirai.query('.engine_mashup > div').css("width", engineWidth);
  var enginePosition = Mirai.query('.engine_mashup > div').offset().top; // Detect engine top position
  
  
  Mirai.query(window).scroll(function() {
    var iScrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    
    if(iScrollY >= enginePosition) {
      Mirai.query('.engine_mashup > div').addClass('fixed_engine');
      Mirai.query('#back-top').fadeIn();
    } else {
      Mirai.query('.engine_mashup > div').removeClass('fixed_engine');
      Mirai.query('#back-top').fadeOut();
    }
  });
}