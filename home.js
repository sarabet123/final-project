// // this is to bring arrow to top of page
$(document).on("ready",function(){
$(".link").on("click",function(e){
 	// console.log(this)
  	e.preventDefault();
		var scrollTime= 500
	  	if( $(this).hasClass("link_home") ){
	  		$.scrollTo("#section1",scrollTime,{
	  			offset: -100
  			});
  		};
	});
  startCarousel();
  $(".arrow-left").on("click",slideBackward);
  $(".arrow-right").on("click",slideForward);
  $(window).on("scroll",function(){
    // Let's check to see whether we are
    // < 320px scrollY or greater...
    // we want to freeze if greater
    if( window.scrollY < 320 ) {
      $("#social_media").removeClass("sticky");
    } else { //window.scrollY >= 320
      $("#social_media").addClass("sticky");
    }
  });
 });

var currentSlide = 1;
var intervalId;

function goToSlideNumber(number) {
  var selector = "#splash" + updateSlide(number); 
  var fadeDuration = 4000;
  $(".splash").stop().not(selector).fadeOut(fadeDuration);
  $(selector).fadeIn(fadeDuration);
}
function slideForward() {
  clearInterval(intervalId);
  intervalId = null;
  goToSlideNumber(currentSlide+1);
  startCarousel();
}
function slideBackward() {
  clearInterval(intervalId);
  intervalId = null;
  goToSlideNumber(currentSlide-1);
  startCarousel();
}
function updateSlide(number) {
  var slideCount = document.getElementsByClassName("splash").length;
  if( number > slideCount ) {
    number = 1;
  } else if( number < 1 ) {
    number = slideCount;
  }
  currentSlide = number;
  return number;
}
function startCarousel() {
  if( intervalId ) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(function(){
    goToSlideNumber(currentSlide+1);
  },5000);
}



 