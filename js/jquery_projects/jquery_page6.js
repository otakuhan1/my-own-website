var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
    var text = $('#todo').val();  
    var html = template(text);
    $('.list').append(html);
    $('#todo').val("");
    return false;  
  });
  $('.glyphicon-star').on('click',function(){
    $(this).toggleClass('active');
  });
  
  $('.glyphicon-remove').on('click',function(){
    $(this).parent().remove();
  });
  
  
  var add = function(item) {
    var html = template(item);
    $('.list').append(html);
  }
  var commands = {
    "add *item": add,
  };
  annyang.addCommands(commands);
  annyang.start();
  
};

$(document).ready(main);