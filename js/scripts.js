var listedNumbers = [];
function counting(countTo) {
  var result = "";
  for (var index = 0; index <= countTo; index += 1);

  if ((index % 3 === 0) && (index % 5 !== 0)) {
  result = "ping";
  } else if ((index % 5 === 0) && (index % 3 !== 0)){
  result = "pong";
  } else if ((index % 3 === 0) && (index % 5 === 0)) {
  result = "ping-pong";
  }
  return listedNumbers.push(index + ",");
  }
$(document).ready(function() {
  $("form#numberEntered").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
      $("#result").show(counting(countTo));
      $("#result").click(function(){
      $(this).remove();
    });
  });
});
