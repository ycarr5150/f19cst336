//JavaScript Files

// VARIABLES
var randomNumber = Math.floor(Math.random() * 5) + 0;
let quantity;
let totalForItem;
let discountP; 
let discount = 0; 
let shipping = 0;
let subtotal;
let tax;
let total;

loadData();

//FUNCTIONS
function loadData() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/promo_products.php",
        dataType: "json",
        success: function(result, status) {
            // result is Array(5)

            $("#name").html(result[randomNumber].productName);
            $("#price").html(result[randomNumber].price);
            
            quantity = result[randomNumber].qty
            $("#quantity").val(quantity);

            totalForItem = result[randomNumber].price * result[randomNumber].qty;
            $("#itemTotal").html(`$${totalForItem.toFixed(2)}`);
            
            $("#discountAmount").html(`- $${discount}`); 
            $("#shippingAmount").html(`$${shipping}`); 

            subtotal = totalForItem + shipping;
            $("#subtotalAmount").html(`$${subtotal.toFixed(2)}`);

            tax = subtotal * .10;
            $("#taxAmount").html(`$${tax.toFixed(2)}`);

            total = subtotal + tax;
            $("#totalAmount").html(`$${total.toFixed(2)}`);
        }
    }); // ajax
}

function changeTotals() {
    $.ajax({
        method: "GET",
        url: "https://cst336.herokuapp.com/projects/api/promo_products.php",
        dataType: "json",
        success: function(result, status) {
            totalForItem = result[randomNumber].price * quantity;
            $("#itemTotal").html(`$${totalForItem.toFixed(2)}`)
            
            if (discountP != 0) {
                discount = totalForItem * discountP; 
                $("#discountAmount").html(`- $${discount.toFixed(2)}`); 
            } else {
                discount = 0; 
                $("#discountAmount").html(`- $${discount}`); 
            }
            
            $("#shippingAmount").html(`$${shipping}`); 

            subtotal = totalForItem + shipping - discount;
            $("#subtotalAmount").html(`$${subtotal.toFixed(2)}`);

            tax = subtotal * .10;
            $("#taxAmount").html(`$${tax.toFixed(2)}`);

            total = subtotal + tax;
            $("#totalAmount").html(`$${total.toFixed(2)}`);
        }
    }); // ajax 
}
// Displaying price changes after qty change 
$("#quantity").on("change", function() {
    quantity = $("#quantity").val();
    changeTotals(); 
})

$("#discountButton").on("click", function() {
    let dicountCode = $("#discountCode").val().toLowerCase();
    
    if(dicountCode === "greatdeal") {
        discountP = .30; 
        $("#dicountText").html(""); 
    } else if (dicountCode === "summersale") {
        discountP = .20; 
        $("#dicountText").html(""); 
    } else if (dicountCode === "clearance") {
        discountP = .10; 
        $("#dicountText").html(""); 
    } else {
        $("#dicountText").html("<br>Promo code doesn't exist!").css("color", "red"); 
        discountP = 0; 
    }
    changeTotals(); 
})

$("#shipping").on("change", function() {
    let shippingChoice = $("#shipping").val(); 
    
    if(shippingChoice === "nextDay") {
        shipping = 25; 
    } else if (shippingChoice === "threeDay") {
        shipping = 20; 
    } else if (shippingChoice === "regular") {
        shipping = 7;    
    } else if (shippingChoice === "") {
        shipping = 0; 
    }
    changeTotals(); 
})
