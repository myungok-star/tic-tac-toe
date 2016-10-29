// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

/*var one = $("#1");
var two = $("#2")
var three = $("#3")
var four = $("#4")
var five = $("#5")
var six = $("#6")
var seven = $("#7")
var eight = $("#8")
var nine = $("#9")*/

/*$(".box").on("click", function(){
  $(this).append("it's me!");*
});*/


function ticTacToe() {
  var player = true;
    $(".box").on("click", function() {
    if(player){
      $(this).append('<img src="css/imgs/o.png">');
      player = false;
    } else {
      $(this).append('<img src="css/imgs/x.png">');
      player = true;
      }
    });
    }

ticTacToe();



});
