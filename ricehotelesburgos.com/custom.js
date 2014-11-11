/* Smooth scrolling for Back Top link */
Mirai.query('#back-top').click(function(evt) {
  evt.preventDefault();
  Mirai.query('html,body').animate({scrollTop:0}, '800', 'swing');
});


Mirai.query(document).ready(function() {
  
  /* pausamos todos los sliders del #main */
  Mirai.query('.container .slideshow').cycle('pause');
  Mirai.query('.container .carousel').cycle('pause');

  
  /* motor fixed en scroll down */
  var engineWidth = Mirai.query('.engine_mashup').innerWidth();
  Mirai.query('.engine_mashup > div').css("width", engineWidth);
  var enginePosition = Mirai.query('.engine_mashup > div').offset().top; // Detect engine top position

  Mirai.query(window).scroll(function() {
    var iScrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  
    if(iScrollY >= enginePosition) {
      Mirai.query('.engine_mashup > div').addClass('fixed_engine');
    } else {
      Mirai.query('.engine_mashup > div').removeClass('fixed_engine');
    }
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
  
});