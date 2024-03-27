// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // Initialize attempts counter

// Get HTML elements
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');

// Function to handle guess submission
function submitGuessHandler() {
    const userGuess = parseInt(guessInput.value);
    attempts++; // Increment attempts counter
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        message.textContent = `Congratulations! ${randomNumber} is the correct number! 🎉 You guessed it in ${attempts} attempts.`;
        submitGuess.disabled = true; // Disable the guess button after successful guess
    } else {
        const diff = Math.abs(randomNumber - userGuess);
        let messageText = '';
        if (diff <= 5) {
            messageText = 'Very close! Try again.';
        } else if (diff <= 10) {
            messageText = 'Close! Keep trying.';
        } else if (userGuess < randomNumber) {
            messageText = 'Too low! Try a higher number.';
        } else {
            messageText = 'Too high! Try a lower number.';
        }
        message.textContent = messageText;
    }
}

// Call the function when the button is clicked
submitGuess.onclick = submitGuessHandler;
