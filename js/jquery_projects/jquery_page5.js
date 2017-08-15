var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');
		if(category==="nav-consumer"){
      $('.thumbnail').removeClass('selected');
      $('.consumer.thumbnail').addClass('selected');
    }
    if(category==="nav-mobile"){
      $('.thumbnail').removeClass('selected');
      $('.mobile.thumbnail').addClass('selected');
    }
    if(category==="nav-commerce"){
      $('.thumbnail').removeClass('selected');
      $('.commerce.thumbnail').addClass('selected');
    }
    if(category==="nav-enterprise"){
      $('.thumbnail').removeClass('selected');
      $('.enterprise.thumbnail').addClass('selected');
    }
    if(category==="nav-all"){
      $('.thumbnail').removeClass('selected');
     
    }
    
    $('.nav li').removeClass('active');
    $(this).addClass('active');

    
    
    
  });
};
 
$(document).ready(main);