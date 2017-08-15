var main = function() {
  $('.day').click(function(){
    $(this).next().toggle();
    
    				$(this).children('.weekday').find('span').toggleClass('glyphicon-minus');
   
  });
};

$(document).ready(main);