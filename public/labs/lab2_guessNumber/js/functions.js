// JavaScript File
            //var randomNumber = 5 + 6; // create a variable w/ var 
            //console.log(randomNumber); // print it out to console to make sure it's right 
            //document.getElementById("numberToGuess").innerHTML = randomNumber;
            
            // THINGS CHANGED FORM JAVASCRIPT TO JQUERY
            // LINES 10, 34, 36, 12, 29, 41, 52, 55

            var randomNumber = Math.floor(Math.random() * 99) + 1; 
            var guesses = $("#guesses"); //var guesses = document.querySelector('#guesses'); 
            var lastResult = document.querySelector('#lastResult');
            var lowOrHi = $("#lowOrHi"); //var lowOrHi = document.querySelector('#lowOrHi'); 
            var winLoseRatio = document.querySelector('#winLoseRatio'); 
            
            var guessSubmit = document.querySelector('.guessSubmit');
            var guessField = document.querySelector('.guessField');
            
            var guessCount = 1; 
            var resetButton = document.querySelector('#reset');
            guessField.focus(); 
            resetButton.style.display = 'none'; // hides the reset button 
            
            var wins = 0; 
            var losses = 0; 
            
            function checkGuess() {
                var userGuess = Number(guessField.value); // gets the number that was typed / ensures its a number 
                if (userGuess > 99) {
                    lowOrHi.html("ERROR, number entered is above 99! Try Again."); 
                    //lowOrHi.innerHTML = 'ERROR, number entered is above 99! Try Again.'; 
                    return;
                }
                if (guessCount === 1) {
                    guesses.html("Previous guesses: "); //guesses.innerHTML = 'Previous guesses: '); 
                } // shows previous guesses 
                $(guesses).append(userGuess + ' '); //guesses.innerHTML += userGuess + ' '; // appends current guess value
                
                if (userGuess === randomNumber) {
                    lastResult.innerHTML = 'Congratulations! You got it right'; 
                    lastResult.style.backgroundColor = 'green'; 
                    lowOrHi.html(" "); //lowOrHi.innerHTML = ''; 
                    wins++; 
                    setGameOver(); 
                } else if (guessCount === 7) {
                    lastResult.innerHTML = 'Sorry, you lost'; 
                    losses++; 
                    setGameOver(); 
                } else {
                    lastResult.innerHTML = 'Wrong!'; 
                    lastResult.style.backgroundColor = 'red'; 
                    if (userGuess < randomNumber) {
                        lowOrHi.html("Last guess was too low!"); 
                        //lowOrHi.innerHTML = 'Last guess was too low!'; 
                    } else if (userGuess > randomNumber) {
                        lowOrHi.html("Last guess was too high!"); 
                        //lowOrHi.innerHTML = 'Last guess was too high!'; 
                    }
                }
                
                guessCount++; 
                guessField.value = ''; 
                guessField.focus(); 
            }
            
            guessSubmit.addEventListener('click', checkGuess); 
            
            function setGameOver() {
                // disables fields so player can no longer type or submit 
                guessField.disabled = true; 
                guessSubmit.disabled = true; 
                resetButton.style.display = 'inline'; // show reset button 
                resetButton.addEventListener('click', resetGame); 
            }
            
            function resetGame() {
                guessCount = 1; 
                
                var resetParas = document.querySelectorAll('.resultParas p');
                for (var i = 0; i < resetParas.length; i++) {
                    resetParas[i].textContent = ''; 
                }
                
                resetButton.style.display = 'none'; 
                
                guessField.disabled = false; 
                guessSubmit.disabled = false; 
                guessField.value = ''; 
                guessField.focus(); 
                
                lastResult.style.backgroundColor = 'white'; 
                
                randomNumber = Math.floor(Math.random() * 99) + 1; 
                
                winLoseRatio.innerHTML = (`Amount of Wins: ${wins} Amounts of Losses: ${losses}`); 
                winLoseRatio.style.backgroundColor = 'Pink';
            }