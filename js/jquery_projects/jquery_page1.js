var main = function() {
  $('#top-text').keyup(function(){
    $('.top-caption').text($(this).val());
    });

	$('#bottom-text').keyup(function(){
    $('.bottom-caption').text($(this).val());
    });
  
  $('#image-url').keyup(function(){
    $('#userimg').attr('src',$(this).val());
    });
}
 
$(document).ready(main);