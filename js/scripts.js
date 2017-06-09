
// var countedArray = [];
function counting(number) {
  for (var index = 0; index <= number; index += 1)  {
      countedArray.push(index + ",");
      alert(newNumber)

  });
});
$(document).ready(function() {
  $("submitButton").click(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    $("#result").append(number);
    $("#result").show();
  });
});
