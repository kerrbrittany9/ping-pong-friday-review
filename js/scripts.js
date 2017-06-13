// business logic
var counting = function(countTo) {

  var listedNumbers = [];

  for (var i = 1; i <= countTo; i += 1)

    if (i % 15 === 0) {
      listedNumbers.push("ping-pong")
    } else if (i % 5 === 0) {
      listedNumbers.push("pong")
    } else if (i % 3 === 0) {
      listedNumbers.push("ping")
    } else {
      listedNumbers.push(i)
    }
  };


// user interface logic
$(document).ready(function(){
  $("form#number-entered").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
    var result = counting(countTo);

    $("ul#result").append("<li class='list'>" + result + "</li>");

    $(".list").click(function() {
      $(this).remove();
    });

    $("input#count-to").val("");
  });
});
