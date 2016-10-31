// wait for the DOM to finish loading
$(document).ready(function() {
    // all code to manipulate the DOM
    // goes inside this function
var player = true;

    $(".box").on("click", function() {
        var selectedBox = $(this);

        //alert the user a box that they select has already been selected.
        if (player) {
                //display an image of x icon when clicked.
            selectedBox.append('<img src="css/imgs/x.png">');
            selectedBox.addClass("hasImg");
            player = false;

        } else {
                //display an image of o icon when clicked.
            selectedBox.append('<img src="css/imgs/o.png">');
            selectedBox.addClass("hasImg");
            player = true;

        }
    });
    if (selectedBox.hasClass("hasImg")) {
      alert ("This box has already been selected, please try a different box!")
    }

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
