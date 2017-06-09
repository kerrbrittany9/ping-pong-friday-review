

var countTo = parseInt($("input#countTo").val());
var countBy = [1];
var listedNumbers = [];
for (var index = countBy; index <= countTo; index += countBy); { listedNumbers.push(index + ",");
}

  if ((index % 3 === 0) && (index % 5 !== 0)) {
      result = "ping";
  } else if ((index % 5 === 0) && (index % 3 !== 0)){
    result = "pong";
  } else if ((index % 3 === 0) && (index % 5 === 0))
};
$(document).ready(function() {
  $("submitButton").click(function(event) {
    event.preventDefault();

    $("#result").append(listedNumbers);
    $("#result").show();
  });
});
