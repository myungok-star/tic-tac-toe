// wait for the DOM to finish loading
$(document).ready(function() {
// all code to manipulate the DOM
// goes inside this function
  var player = true;

/* Testing
$(".box").on("click", function(){
  $(this).append("it's me!");*
*/
$(".box").on("click", function(event) {
    var selectedBox = $(this);

    if (seclectedBox.hasClass("xxx") || selectedBox.hasClass("ooo")) {
        alert("This box has been already selected, please select another.")
    } else {
      if (player === true) {
        selectedBox.addClass("xxx");
        player = false;
      } else {
        selectedBox.addClass("ooo");
        player = true;
      }
    }
})
});



/*    function ticTacToe() {
        var player = true;
        $(".box").on("click", function() {
            if (player) {
                $(this).append('<img src="css/imgs/o.png">');
                $(this).addClass("hasImage")
                player = false;
            } else {
                $(this).append('<img src="css/imgs/x.png">');
                $(this).addClass("hasImage")
                player = true;
            }
        });
    }



    ticTacToe();
    */








});
