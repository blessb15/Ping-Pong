//business
var runIt = function(input){

var countUp = 1;

for(i=0; i <= input; i++){
  if (input > countUp){
  var addOne = countUp + 1;
  }
}


var result = $(".display").append("<li>"+ countUp + "</li>");



console.log(result);

}







//user
$(document).ready(function(){
  $("#Ping-Pong").submit(function(event){
  event.preventDefault();

  var input = $("#number").val();

  runIt(input);
  });
});
