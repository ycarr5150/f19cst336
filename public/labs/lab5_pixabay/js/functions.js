// JavaScript File
// variables
let keyword;
let orientation;
let searchString = "";

$("#search-button").on("click", function() {
    keyword = $("#keyword").val();
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
            console.log(result); 
    }
    }); 
}
