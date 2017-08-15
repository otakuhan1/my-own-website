var main = function() {
	$('.more-btn').click(function(){
    $(this).next().toggle();
  });
  
  $('.share').on('click',function(){
    $(this).siblings('.share-menu').toggle();
  });
  
  $('.notification').click(function(){
    $(this).toggleClass('active');
  });
};

$(document).ready(main);