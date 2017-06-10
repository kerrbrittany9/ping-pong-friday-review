// business
var counting = function(countTo){
var listedNumbers = [];
var countBy = [1];
for (var index = countBy; index <= countTo; index += countBy)
  {
    if (index % 15 === 0) {
      listedNumbers.push("ping-pong")
    } else if (index % 5 === 0) {
      listedNumbers.push("pong")
    } else if (index % 3 === 0) {
      listedNumbers.push("ping")
    } else {
      listedNumbers.push(index)
    }
  } return listedNumbers;
};

// user interface
$(document).ready(function(){
  $("form#numberEntered").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#countTo").val());
    $("#result").empty();
     var result = counting(countTo);
     $("#result").append("<li>" + result + "</li>");

  });
});
// DOM failed to execute query selector on all???? this is the debugger issue
