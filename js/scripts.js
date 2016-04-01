//business
var incNum = 0;
var runIt = function(input){

    while (input > incNum){
      incNum += 1;
      var show = $(".display").append("<li>" + incNum + "</li>");
      if (incNum % 5 === 0){
      }
    }
}



// $(".display").append("<li>" + incNum + "</li>");




//user

$(document).ready(function(){

  $("#Ping-Pong").submit(function(event){
    event.preventDefault();

    var show

    var userInput = $("input#number").val();

    runIt(userInput);
  });
});
