
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
$(document).ready(function(){
  $("form#numberEntered").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#countTo").val());

    var result = counting(countTo);
      $("#result").show(listedNumbers);
      $("#result").click(function() {
      $(this).hide();
    });
  });
});
