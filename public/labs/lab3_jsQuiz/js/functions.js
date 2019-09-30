// JavaScript File
$(document).ready(function() {

// GLOBAL VARIABLS 
    var score = 0;
    var q8ChoicesArray = ["Battle_of_Gettysberg", "Battle_of_Little_Big_Horn", "Battle_of_New_Orleans"];
    var q8ChoicesArray2 = new Array(); 

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
    $(function() {
    // SAVING PREVIOUS SCORE
        if (window.localStorage) {
            $("#scoreHistory").html(`Previous Score: ${window.localStorage.getItem("previousScore")} `);
        }
        else {
            $("#scoreHistory").html("Previous Score: 0"); 
        }
    });
    
    function displayQ4Choices() {
        let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray);

        for (let i = 0; i < q4ChoicesArray.length; i++) {
            $("#q4Choices").append(` <input type="radio" name="q4" id="${q4ChoicesArray[i]}" 
            value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`);
        }
    } // displays q4 choices 

    function displayQ8Choices() {
        q8ChoicesArray = _.shuffle(q8ChoicesArray); 

        for (let i = 0; i < q8ChoicesArray.length; i++) {
            q8ChoicesArray2[i] = q8ChoicesArray[i].replace(/_/g, ' '); 
            $("#q8Choices").append(` <h5>${q8ChoicesArray2[i]} <select id="${q8ChoicesArray[i]}"> 
                <option value="one">1</option> <option value="two">2</option><option value="three">3</option>
                </select> </h5> `);
        }
    } // displays q8 choices 

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

    // VARIABLES 
        score = 0;
        let q1Response = $("#q1").val().toLowerCase();
        let q2Response = $("#q2").val();
        let q4Response = $("input[name=q4]:checked").val();
        let q6Response = $("#q6").val();
        let q7Response = $("#q7").val();
        let q8Gettys = $("#Battle_of_Gettysberg").val();
        let q8LittleBig = $("#Battle_of_Little_Big_Horn").val();
        let q8NewOrleans = $("#Battle_of_New_Orleans").val();

    // CHECK QUESTIONS 
        // question 1
        if (q1Response === "sacramento") {
            rightAnswer(1);
        }
        else {
            wrongAnswer(1);
        }

        // question 2
        if (q2Response === "mo") {
            rightAnswer(2);
        }
        else {
            wrongAnswer(2);
        }

        // question 3
        if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") &&
            !$("#Jackson").is(":checked") && !$("#Franklin").is(":checked")) {
            rightAnswer(3);
        }
        else {
            wrongAnswer(3);
        }

        // question 4
        if (q4Response === "Rhode Island") {
            rightAnswer(4);
        }
        else {
            wrongAnswer(4);
        }

        // question 5
        if ($("#seal2").css("background-color") == "rgb(255, 255, 0)") {
            rightAnswer(5);
        }
        else {
            wrongAnswer(5);
        }

        // question 6
        if (q6Response === "1776-07-04") {
            rightAnswer(6);
        }
        else {
            wrongAnswer(6);
        }

        // question 7
        if (q7Response === "1941") {
            rightAnswer(7);
        }
        else {
            wrongAnswer(7);
        }

        // question 8 
        if (q8Gettys === "two" && q8LittleBig === "three" && q8NewOrleans === "one") {
            rightAnswer(8);
        }
        else {
            wrongAnswer(8);
        }

    // TOTAL SCORE 
        if (score >= 80) {
            $("#totalScore").html(`Total Score: ${score}`).css("color", "green");
            if (score === 100) {
                $("#winner").html("CONGRATULATIONS!").css("color", "green").css("border", "2px solid black"); 
            }
        }
        else {
            $("#totalScore").html(`Total Score: ${score}`).css("color", "red");
        }
        
        if (window.localStorage) {
            window.localStorage.setItem("previousScore", score);
        }
    }
}); // ready
