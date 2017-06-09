// $(document).ready(function() {
//   $("form#numberEntered").submit(function(event) {
//     event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
    var countBy = [1];
    var listedNumbers = [];
    function counting(countTo) {
      var result = "";
      for (var index = countBy; index <= countTo; index += countBy); { return listedNumbers.push(index + ",");
      }

        if ((index % 3 === 0) && (index % 5 !== 0)) {
        result = "ping";
      } else if ((index % 5 === 0) && (index % 3 !== 0)){
        result = "pong";
      } else if ((index % 3 === 0) && (index % 5 === 0)) {
        result = "ping-pong";
      }
        return result;
      }
$(document).ready(function() {
  $("form#numberEntered").submit(function(event) {
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
      $("#result").show(countTo);
      $("#result").click(function(){
      $(this).remove();
    });
  });
});
