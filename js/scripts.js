
// get input number to return in a new array, count

function singleDigit(number) {
  var result = "";
  if (number % 3 === 0) {
      result = "ping";
  } else if (number % 5 === 0) {
    result = "pong";
  };
  console.log(result);
  return result;
};


$(document).ready(function() {
  $("submitButton").click(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    $("#result").append(number);
    $("#result").show();
  });
});
