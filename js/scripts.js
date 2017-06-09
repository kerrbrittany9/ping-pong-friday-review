function counting(countTo) {
  var countBy = [1];
  var listedNumbers = [];
  var result;
  for (var index = countBy; index <= countTo; index += countBy); { return listedNumbers.push(index + ",");
  }
  if (isNaN(countTo)) {
    alert("Please enter a number less than 4000.");
  } else  if ((index % 3 === 0) && (index % 5 !== 0)) {
    result = "ping";
  } else if ((index % 5 === 0) && (index % 3 !== 0)){
    result = "pong";
  } else if ((index % 3 === 0) && (index % 5 === 0)) {
    result = "ping-pong";
  }
      console.log(result);
      return result;

    }
  $(document).ready(function() {
    $("submitButton").click(function(event) {
      event.preventDefault();
      var countTo = parseInt($("input#count-to").val());
      $("#result").show(countTo);
      $("#result").click(function(){
      $(this).remove();
    });
  });
});
