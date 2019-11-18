//not actually storing information
$("#submit").on("click", function() {
    $("#reply").html(""); 
    
    if( $("#name") == "" || $("#email") == "" || $("#subject") == "") {
        $("#reply").html("Error, missing a field").css("color", "red"); 
    } else {
        $("#reply").html("Thank you for your submission :)").css("color", "green"); 
    }
}); 