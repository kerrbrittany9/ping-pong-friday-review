var listedNumbers = [];
var countBy = [1];
// function counting(countTo) {
//   var result = "";
for (var index = countBy; index <= countTo; index += countBy); {
  var listedNumbers = listedNumbers.push(index + ",");
  return listedNumbers
  }
  if ((index % 3 === 0) && (index % 5 !== 0)) {
    result = "ping";
  } else if ((index % 5 === 0) && (index % 3 !== 0)){
    result = "pong";
  } else if ((index % 3 === 0) && (index % 5 === 0)) {
    result = "ping-pong";
  }
};
$(document).ready(function() {
  $("form#numberEntered").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
      $("#result").show(listedNumbers);
      $("#result").click(function() {
      $(this).hide();
    });
  });
});
