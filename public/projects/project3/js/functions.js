// JavaScript File
// variables
let apiKey = "&APPID=be18a885731becdb09ae4592bae41ee6";
let zipcode;

$("#submit").on("click", function() {
    zipcode = $("#zipcode").val();
    zipcode = zipcode + ",us"; 

    updateWeather();
})

function updateWeather() {
    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + apiKey,
        dataType: "json",
        success: function(result, status) {
            console.log(result); 
        }
    });
}