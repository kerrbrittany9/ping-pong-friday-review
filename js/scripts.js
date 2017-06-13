// business
var counting = function(countTo){
  var listedNumbers = [];

  for (var i = countBy; i <= countTo; i += countBy)

    if (i % 15 === 0) {
      listedNumbers.push("ping-pong")
    } else if (i % 5 === 0) {
      listedNumbers.push("pong")
    } else if (i % 3 === 0) {
      listedNumbers.push("ping")
    } else {
      listedNumbers.push(i)
    }
  // } return listedNumbers;
};

// user interface
$(document).ready(function(){
  $("form#number-entered").submit(function(event){
    alert(hey);
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
    $("#result").empty();
     var result = counting(countTo);
     $("#result").append("<li>" + result + "</li>");

  });
});
// DOM failed to execute query selector on all???? this is the debugger issue
