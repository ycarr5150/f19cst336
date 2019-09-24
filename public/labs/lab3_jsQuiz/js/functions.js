// JavaScript File
            $(document).ready(function() {
            // GLOBAL VARIABLS 
                var score = 0; 
                
////////////////////////////////// I MADE THE ARRAY A GLOBAL VARIABLE JUST IN CASE /////////////////////////////////////////////////////
                var q8ChoicesArray = ["Battle of Gettysberg", "Battle of Little Big Horn", "Battle of New Orleans"];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
            // EVENT LISTENERS
                // submit quiz button  
                $("button").on("click", gradeQuiz); 
                
                // question 5 images  
                $(".q5Choice").on("click", function() {
                    $(".q5Choice").css("background", "");
                    $(this).css("background", "rgb(255, 255, 0)");
                }); 
                
                displayQ4Choices(); 
                displayQ8Choices(); 
                
            // FUNCTIONS
                function displayQ4Choices() {
                    let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"]; 
                    q4ChoicesArray = _.shuffle(q4ChoicesArray); 
                    
                    for (let i = 0; i < q4ChoicesArray.length; i++) {
                        $("#q4Choices").append(` <input type="radio" name="q4" id="${q4ChoicesArray[i]}" 
                        value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`);
                    }
                } // displays q4 choices 
                
//////////////////////////// FUNCTION FOR DISPLAYING Q8CHOICESARRAY ELEMENTS AND GIVING IT DROPDOWN OPTION ///////////////////////////////
                function displayQ8Choices() {
                    //q8ChoicesArray = _.shuffle(q8ChoicesArray); 
                    
                    for (let i = 0; i < q8ChoicesArray.length; i++) {
                        $("#q8Choices").append(` <h5>${q8ChoicesArray[i]} <select id="${q8ChoicesArray[i]}"> 
                        <option value="one">1</option> <option value="two">2</option><option value="three">3</option>
                        </select> </h5> `);
                    }
                } // displays q8 choices 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                function isFormValid() {
                    let isValid = true; 
                    if ($("#q1").val() === "") {
                        isValid = false; 
                        $("#validationFdbk").html("Question 1 was not answered"); 
                    }
                    return isValid; 
                } // checks to see if q1 was answered 
                
                function rightAnswer(index) {
                    $(`#q${index}Feedback`).html("Correct!!"); 
                    $(`#q${index}Feedback`).attr("class", "bg-success text-white"); 
                    $(`#markImg${index}`).html("<img src='img/checkmark.png' alt='checkmark'>"); 
                    score += 12.5; 
                } // if the answer is right, prefilled feedback 
                
                function wrongAnswer(index) {
                    $(`#q${index}Feedback`).html("Incorrect!!"); 
                    $(`#q${index}Feedback`).attr("class", "bg-warning text-white"); 
                    $(`#markImg${index}`).html("<img src='img/xmark.png' alt='xmark'>"); 
                } // if the answer is wrong, prefilled feedback 
                
                function gradeQuiz() {
                    $("#validationFdbk").html(""); //resets validation feedback 
                    
                    if (!isFormValid()) {
                        return; 
                    }
                    
                    // variables
                    score = 0; 
                    let q1Response = $("#q1").val().toLowerCase(); 
                    let q2Response = $("#q2").val();
                    let q4Response = $("input[name=q4]:checked").val(); 
                    let q6Response = $("#q6").val(); 
                    let q7Response = $("#q7").val(); 
                    
////////////////////// TRYING TO GET THE OPTION THAT WAS CHOOSEN FOR EACH ARRAY ELEMENT ////////////////////////////////////////
                    let q8Gettys = $("#Battle of Gettysberg").val(); 
                    let q8LittleBig = $("#Battle of Little Big Horn").val(); 
                    let q8NewOrleans = $("#Battle of New Orleans").val(); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                    // old 
                    //let q8Gettys = $("#gettysberg").val(); 
                    //let q8LittleBig = $("#littleBig").val(); 
                    //let q8NewOrleans = $("#newOrleans").val(); 
                    
                    // QUESTION 1
                    if (q1Response === "sacramento") {
                        rightAnswer(1);  
                    } else {
                        wrongAnswer(1); 
                    }
                    
                    // QUESTION 2
                    if(q2Response === "mo") {
                        rightAnswer(2); 
                    } else {
                        wrongAnswer(2); 
                    }
                    
                    // QUESTION 3
                    if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked")
                    && !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")) {
                        rightAnswer(3); 
                    } else {
                        wrongAnswer(3); 
                    }
                    
                    // QUESTION 4
                    if (q4Response === "Rhode Island") {
                        rightAnswer(4);
                    } else {
                        wrongAnswer(4); 
                    }
                    
                    // QUESTION 5
                    if ($("#seal2").css("background-color") == "rgb(255, 255, 0)") {
                        rightAnswer(5);
                    } else {
                        wrongAnswer(5); 
                    }
                    
                    // QUESTION 6
                    if (q6Response === "1776-07-04") {
                        rightAnswer(6);
                    } else {
                        wrongAnswer(6);
                    }
                    
                    // QUESTION 7
                    if (q7Response === "1941") {
                        rightAnswer(7);
                    } else {
                        wrongAnswer(7); 
                    }
                    
/////////////////////////////////////////////// WHY DOES THE WORLD HATE ME SO ///////////////////////////////////////////////
                    // QUESTION 8 
                   if (q8Gettys === "two" && q8LittleBig === "three" && q8NewOrleans === "one") {
                        rightAnswer(8);
                    } else {
                        wrongAnswer(8); 
                    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    
                    // TOTAL SCORE 
                    if (score >= 80) {
                        $("#totalScore").html(`Total Score: ${score}`).css("color","green");   
                    } else {
                        $("#totalScore").html(`Total Score: ${score}`).css("color","red");
                    }
                }
            }); // ready