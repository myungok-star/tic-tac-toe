// wait for the DOM to finish loading
$(document).ready(function() {
    // all code to manipulate the DOM
    // goes inside this function
    var player = true;

    $(".box").on("click", function() {
        var selectedBox = $(this);

        if (selectedBox.hasClass("hasImgX") || selectedBox.hasClass("hasImgO")) {
            alert("This box has already been selected, please try a different box!")
        }
        //alert the user a box that they select has already been selected.
        else if (player) {
            //display an image of x icon when clicked.

            selectedBox.append('<img src="css/imgs/x.png">');
            selectedBox.addClass("hasImgX");
            var img = "hasImgX";
            if (whichPlayerWon(img)) {
                alert("Player X won!")
            } else {
                player = false;
            }

        } else {
            //display an image of o icon when clicked.

            selectedBox.append('<img src="css/imgs/o.png">');
            selectedBox.addClass("hasImgO");
            var img = "hasImgO";
            if (whichPlayerWon(img)) {
                alert("Player O won!")
            } else {
                player = true;
            }

        }


        function resetGame() {
            selectedBox.empty();
            selectedBox.removeClass("hasImgX");
            selectedBox.removeClass("hasImgO");
            var player = true;
        }

        function whichPlayerWon(img) {
            if ($("#cell1").hasClass(img) && $("#cell2").hasClass(img) && $("#cell3").hasClass(img)) {
                return true;
            } else if ($("#cell4").hasClass(img) && $("#cell5").hasClass(img) && $("#cell6").hasClass(img)) {
                return true;
            } else if ($("#cell7").hasClass(img) && $("#cell8").hasClass(img) && $("#cell9").hasClass(img)) {
                return true;
            } else if ($("#cell1").hasClass(img) && $("#cell4").hasClass(img) && $("#cell7").hasClass(img)) {
                return true;
            } else if ($("#cell2").hasClass(img) && $("#cell5").hasClass(img) && $("#cell8").hasClass(img)) {
                return true;
            } else if ($("#cell3").hasClass(img) && $("#cell6").hasClass(img) && $("#cell9").hasClass(img)) {
                return true;
            } else if ($("#cell1").hasClass(img) && $("#cell5").hasClass(img) && $("#cell9").hasClass(img)) {
                return true;
            } else if ($("#cell3").hasClass(img) && $("#cell5").hasClass(img) && $("#cell7").hasClass(img)) {
                return true;
            } else {
                return false;
            }
        }



        $("#reset_button").on("click", function() {
            resetGame();
        });


    });

});
