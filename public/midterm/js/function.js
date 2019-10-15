// JavaScript File

//variables
let likes; 
let dislikes; 
onload();

//functions
function onload() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=sB2T0sQBUdw",
        dataType: "json",
        success: function(result, status) {
            likes = result.likes; 
            dislikes = result.dislikes; 
            $("#likes").html(likes);
            $("#dislikes").html(dislikes);
        }
    });
}

$("#comment-button").on("click", function() {
    $("#added").html(""); 
    $("#question").css("visibility", "hidden"); 
    $("#feedback").html(""); 
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/videoLikesAPI.php?videoId=xyz&action=comments",
        dataType: "json",
        success: function(result, status) {
            console.log(result);
            let htmlstring = "<br><h3><u>Comment Section</u></h3><br>";

            for (var i = 0; i < 5; i++) {
                htmlstring += `<span id="name"><b>${result[i].author}</b></span>`;
                htmlstring += `<span id="date"><i>${result[i].date}</i></span><br>`;
                htmlstring += `<span id="comment-text">"${result[i].comment}"</span><br>`;
                htmlstring += `<span id="date">Rating: ${result[i].rating}</span><br><br>`;
            }
            $("#added").append(htmlstring);
        }
    });
})

$("#question-button").on("click", function() {
    $("#added").html(""); 
    $("#question").css("visibility", "visible"); 
})

$("#question").on("change", function() {
    let quesResponse = $("#question").val().toLowerCase(); 
    
    if (quesResponse === "csumb") {
        $("#feedback").html("CORRECT!").css("color", "green"); 
    } else {
        $("#feedback").html("INCORRECT, did you even watch it").css("color", "red"); 
    }
})