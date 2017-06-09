// back-end logic//
var counting = function(countTo)
var countBy = [1];
var listedNumbers = [];
for (var index = countBy; index <= countTo; index += countBy); { listedNumbers.push(index + ",");
}

  if ((index % 3 === 0) && (index % 5 !== 0)) {
      result = "ping";
  } else if ((index % 5 === 0) && (index % 3 !== 0)){
    result = "pong";
  } else if ((index % 3 === 0) && (index % 5 === 0)) {
};
    $(document).ready(function() {
    $("submitButton").click(function(event) {
      event.preventDefault();
      var countTo = parseInt($("input#count-to").val());
      var result = counting(countTo);
      $("#result").show(result);
      $("#result").click(function(){
      $(this).remove();
    });
  });
});
