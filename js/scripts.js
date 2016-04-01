//business logic
var incNum = 0;
  var runIt = function(input){
    while (input > incNum){
      incNum += 1;
      if (incNum % 3 === 0 && incNum % 5 === 0){
        $(".list").append("<li>" + "pingpong" + "</li>");
        } else if (incNum % 3 === 0){
          $(".list").append("<li>" + "ping" + "</li>");
          } else if (incNum % 5 === 0){
            $(".list").append("<li>" + "pong" + "</li>");
            } else
              $(".list").append("<li>" + incNum + "</li>");
    }

  }
//user logic
$(document).ready(function(){
  $("#Ping-Pong").submit(function(event){
    event.preventDefault();

    var userInput = $("input#number").val().split(" ");

    runIt(userInput);
  });
});
