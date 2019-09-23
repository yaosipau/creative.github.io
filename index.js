$('.bars').click(function() {
  $('ul').slideToggle();
});

$('ul li').click(function() {
  $(this).find('ul').slideToggle();
  $(this).siblings().find('ul').slideUp();

});

$(window).resize(function() {
  if ($(window).width() > 768) {
    $("ul").removeAttr('style');
  }
});

$('#toBot').click(function() {
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
	return false;
});
