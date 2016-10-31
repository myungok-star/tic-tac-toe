// wait for the DOM to finish loading
$(document).ready(function() {
// all code to manipulate the DOM
// goes inside this function
var player = true;

$(".box").on("click", function(event) {
    var selectedBox = $(this);
    //alert the user a box that they select has already been selected.
    if (seclectedBox.hasClass("xxx") || selectedBox.hasClass("ooo")) {
        alert("This box has been already selected, please select a different box.")
        // add class to selected boxes so that previously claimed boxed won't be available for selection.
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
