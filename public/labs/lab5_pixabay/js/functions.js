// JavaScript File
// variables
let keyword;
let orientation;
let searchString = "";
let totalHits;

$("#search-button").on("click", function() {
    keyword = $("#keyword").val();
    keyword = keyword.replace(/\s+/g, "%20");
    orientation = $("#orientation").val();

    searchString = "q=" + keyword + "&orientation=" + orientation + "&image_type=vector";
    searchForImages();
})

function searchForImages() {
    $.ajax({
        method: "GET",
        url: "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&" + searchString,
        dataType: "json",
        success: function(result, status) {
            totalHits = result.hits.length; // how many search results returned 

            if (totalHits == 0) {
                $("#error-message").html("There are no search results available.<br>Please change your search.").css("color", "red");
            } else {
                $("#display").html(""); 
                
                var randomNumber = new Array(); 
                
                while(randomNumber.length != 4) {
                    let previous = false; 
                    let number = Math.floor(Math.random() * totalHits); 
                    
                    for (let i = 0; i < randomNumber.length; i++) {
                        if(number == randomNumber[i]) {
                            previous = true; 
                        }
                    }
                    
                    if (!previous) {
                        randomNumber.push(number); 
                    }
                }
                
                // displaying picture 
                for (let i = 0; i < 4; i++) {
                    $("#display").append(`<div style="width: ${result.hits[randomNumber[i]].previewWidth}"> 
                        Likes: ${result.hits[randomNumber[i]].likes} <br><br> 
                        <img src="${result.hits[randomNumber[i]].largeImageURL}" alt="picture" 
                        width="${result.hits[randomNumber[i]].previewWidth}" height="${result.hits[randomNumber[i]].previewHeight}" 
                        style="border-radius: 25px;"> </div>`);  
                }
            }
        } // success
    }); // ajax
} // function 
