$(document).ready(function(){
  $(".login>p").click(function(){
    $(this).next().toggle();
  });
  
  $("#accordion").accordion();
});