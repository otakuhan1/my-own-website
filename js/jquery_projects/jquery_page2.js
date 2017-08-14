var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var email = $('#email').val();
    var password = $('#password').val();
    
    if(firstName === "") {
      $(".first-name-error").text("u need a first name! Dumbass");
    }
    
    if(lastName === ""){
      $(".last-name-error").text("why u dont enter your lastname? r u retarded?");
    }
    
    if(email === ""){
      $(".email-error").text("you forgot your email! r u blind?");
    }else if(email === "otakuhan1@yahoo.com"){
      $(".email-error").text("You THIEF! SHAME ON YOU!");
    }
    
    if(password === ""){
      $(".password-error").text("you forgot your password! how r u so stupid?!!");
    }else if(password.length <8){
      $(".password-error").text("TOO SHORT! how r u so stupid?!!");
    }
    
    

    return false;
  })
}

$(document).ready(main);