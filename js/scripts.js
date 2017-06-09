var newNumber = parseInt($("input#number").val());
var countedArray = [];
  for (var index = 0; index < newNumber; index += 1)  {
      countedArray.push(index + ",");
  }
    }
$(document).ready(function() {
  $("submitButton").click(function(event) {
    event.preventDefault();
    $("#result").append();
  });
});
