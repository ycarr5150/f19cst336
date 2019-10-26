// JavaScript File
var item1Total = 28.00;
var item2Total = 23.00; 
var subtotal = 51.00;
var discount = 1; 
var tax; 
var shipping = 0;
var total; 
var isValid = false; 

function updatingTotals() {
    subtotal = (item1Total + item2Total); 
    $("#subtotal").html(`$${subtotal.toFixed(2)}`); 
    
    if (discount != 1) {
        subtotal = subtotal * discount; 
        $("#sub-discount").html(`NEW SUBTOTAL: $${subtotal.toFixed(2)}<br>`); 
    }
    
    tax = subtotal * .10; 
    total = subtotal + tax + shipping; 
    
    $("#taxes").html(`$${tax.toFixed(2)}`); 
    $("#total").html(`$${total.toFixed(2)}`); 
}

$("#qty-item1").on("change", function () {
    item1Total = 28.00 * $("#qty-item1").val(); 
    $("#item1-total").html(`$${item1Total.toFixed(2)}`);
    
    updatingTotals(); 
}); // item 1

$("#qty-item2").on("change", function () {
    item2Total = 23.00 * $("#qty-item2").val(); 
    $("#item2-total").html(`$${item2Total.toFixed(2)}`);
    
    updatingTotals();
}); // item 2

$("#nextDayDelivery").on("change", function() {
    shipping = 10; 
    isValid = true; 
    $('#shipping').html("$10"); 
    
    updatingTotals();  
}); // shipping 

$("#regularShipping").on("change", function() {
    shipping = 5; 
    isValid = true;
    $('#shipping').html("$5"); 
    
    updatingTotals();  
}); // shipping 

$("#submit-button-1").on("click", function () {
    let discountCode = $("#coupon-section").val().toLowerCase(); 
    
    if (discountCode === "please") {
        discount = .70; 
    }
    
    $("#discount").html("Discount: 30%<br>")
    updatingTotals(); 
}); // update discount

$("#submit-button-2").on("click", function () {
    if(!isValid) {
        $("#feedback-message").html("ERROR: Shipping must be selected.").css("color", "red"); 
    } else {
        $("#feedback-message").html("Order has been placed! <br>Your confirmation will be printed shortly.").css("color", "green");
    }
}); 