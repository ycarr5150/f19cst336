// JavaScript File
// variables
let apiKey = "&APPID=be18a885731becdb09ae4592bae41ee6";
let zipcode;
let cityID;

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
            $("#locationName").html(`Location: ${result.name}`);
            $("#coordinates").html(`Latitude: ${result.coord.lat}, Longitude: ${result.coord.lon}`);
            //update();
        }
    });
}

function update() {
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({
        id: 12, //USA ID ?
        cityid: '5391295', 
        appid: 'be18a885731becdb09ae4592bae41ee6',
        units: 'imperial',
        containerid: 'openweathermap-widget-12',
    });

    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s)
}
