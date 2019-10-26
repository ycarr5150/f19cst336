print(); 



function print() {
    console.log('Hello I work'); 
}

$("#submitButton").on("click", function(){
    var multiplied; 
    
    multiplied = $("#number").val() * 2; 
    $("#showMath").append(`Your number times 2 is: ${multiplied}`)
})