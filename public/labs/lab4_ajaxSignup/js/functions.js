// JavaScript File

var usernameAvailable = false;
var isValid;

loadStates();

// load all the states initially 
function loadStates() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/state_abbrAPI.php",
        dataType: "json",
        success: function(result, status) {
            $("#state").html(`<option value="">Select One</option>`)
            
            for (var i = 0; i < result.length; i++) {
                $("#state").append(` <option value=${result[i].usps}>${result[i].state} </option> `);
            }
        }
    }); // ajax
}

// Displaying City from API after typing a zip code
$("#zip").on("change", function() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/cityInfoAPI.php",
        dataType: "json",
        data: { "zip": $("#zip").val() },
        success: function(result, status) {
            $("#city").html(`City: ${result.city}<br>`);
            $("#latitude").html(`Latitude: ${result.latitude}<br>`);
            $("#longitude").html(`Longitude: ${result.longitude}<br>`);
        }
    }); // ajax
}); // zip 

// Displaying County from API after selecting state 
$("#state").on("change", function() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/countyListAPI.php",
        dataType: "json",
        data: { "state": $("#state").val() },
        success: function(result, status) {
            $("#county").html("<option> Select One: </option>");
            for (let i = 0; i < result.length; i++) {
                $("#county").append("<option>" + result[i].county + "</option>");
            }
        }
    }); // ajax
}); // state 

$("#username").on("change", function() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/usernamesAPI.php",
        dataType: "json",
        data: { "username": $("#username").val() },
        success: function(result, status) {
            if (result.available) {
                $("#usernameError").html("Username is available!");
                $("#usernameError").css("color", "green");
                usernameAvailable = true;
            }
            else {
                $("#usernameError").html("Username is unavailable!");
                $("#usernameError").css("color", "red");
                usernameAvailable = false;
            }
        }
    }) // ajax 
}); // username 

$("#signupForm").on("submit", function(e) {
    if (!isFormValid()) {
        e.preventDefault();
    }
});

function isFormValid() {
    isValid = true;
    if (!usernameAvailable) {
        isValid = false;
    }

    if ($("#username").val().length == 0) {
        isValid = false;
        $("#usernameError").html("Username is required!");
    }

    if ($("#password").val() != $("#passwordAgain").val()) {
        $("#passwordAgainError").html("Passwords don't match!");
        $("#passwordAgainError").css("color", "red");
        isValid = false;
    }

    if ($("#password").val().length < 6) {
        $("#passwordAgainError").html("Password must be at least 6 characters long!");
        isValid = false;
    }

    return isValid;
}
