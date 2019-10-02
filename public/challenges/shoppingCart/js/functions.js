// JavaScript File
var newTotal1 = 30;
var newTotal2 = 40;
var shippingTotal = 10; 
var newSubtotal; 
var newTax; 
var newTotal = 88; 

function updatingTotals() {
    newSubtotal = newTotal1 + newTotal2 + shippingTotal; 
    $('#subtotal').html(`$${newSubtotal}`); 
    
    newTax = newSubtotal * .10; 
    $('#tax').html(`$${newTax}`); 
    
    newTotal = newSubtotal + newTax; 
    $('#total').html(`$${newTotal}`);
}

$("#qty_item1").on("change", function() {
    
    newTotal1 = 30 * $("#qty_item1").val();
    //parseInt($('#totalItem1').html())
    $('#totalItem1').html(`$${newTotal1}`); 
    
    updatingTotals(); 
}); // qty_item1

$("#qty_item2").on("change", function() {
    
    newTotal2 = 20 * $("#qty_item2").val();
    $('#totalItem2').html(`$${newTotal2}`); 
    
    updatingTotals();  
}); // qty_item2

$("#nextDayDelivery").on("change", function() {
    shippingTotal = 15; 
    $('#shippingCost').html("$15"); 
    
    updatingTotals();  
}); 

$("#threeDayDelivery").on("change", function() {
    shippingTotal = 10; 
    $('#shippingCost').html("$10"); 
    
    updatingTotals(); 
}); 

$("#regularShipping").on("change", function() {
    shippingTotal = 5; 
    $('#shippingCost').html("$5"); 
    
    updatingTotals(); 
}); 

$("#submitButton").on("click", function() {
    let isValid = true; 
    var shippingResponse = $("input[name=delivery]:checked").val(); 
    
    if (shippingResponse == "" || !$("#terms").is(':checked')) {
        isValid = false; 
    }
    
    if (!$("input[name=delivery]:checked")) {
        $("#errorMessage").html("ERROR: Shipping Option Must Be Selected").css("color", "red"); 
    } else {
         $("#errorMessage").html(""); 
    }
    
    if (!$("#terms").is(':checked')) {
         $("#termsMessage").css("color", "red"); 
    } else {
        $("#termsMessage").css("color", "black"); 
    }
    
    if(isValid) {
        $("#errorMessage").html("Thank you for your purchase").css("color", "green"); 
    }
}); 