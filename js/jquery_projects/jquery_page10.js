var main = function() {
  var cities = [
    "city1",
    "city2",
    "city3",
    "seattle"
  ];
  $('#cityInput').autocomplete({
    source: cities
  });
}
 
$(document).ready(main);