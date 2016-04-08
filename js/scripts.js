//business logic
  var runIt = function(input){
    var incNum = 0;
    var newArray = [];
    while (input > incNum){
      incNum += 1;
      if (incNum % 3 === 0 && incNum % 5 === 0){
      newArray.push("pingpong");
      } else if (incNum % 3 === 0){
      newArray.push("ping");
      } else if (incNum % 5 === 0){
      newArray.push("pong");
      } else
      newArray.push(incNum);
    }
    return newArray;
  }


//user logic
$(document).ready(function(){
  $("#Ping-Pong").submit(function(event){
    event.preventDefault();
    $("#result").empty();
    var userInput = $("input#number").val();
    console.log(userInput);
    var result = runIt(userInput);
    console.log(result)
    for(i=0; i < result.length; i++){
    $("#result").append("<li>" + result[i] + "</li>");
    }
  });
});
