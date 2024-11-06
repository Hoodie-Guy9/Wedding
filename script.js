// Set initial countdown time in seconds (30 minutes = 1800 seconds)
let countdownTime = 1800;

// Create and style the countdown element
const countdownElement = document.createElement("p");
countdownElement.classList.add("countdown");
document.querySelector("#invitation-header").appendChild(countdownElement);

function updateCountdown() {
    // Calculate minutes and seconds remaining
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    
    // Display the countdown
    countdownElement.textContent = `Only ${minutes} minutes and ${seconds.toString().padStart(2, '0')} seconds until we say "I Do"!`;
    
    // Decrease countdown time by 1 second
    countdownTime--;

    // Stop countdown at zero
    if (countdownTime < 0) {
        countdownElement.textContent = "The wedding is starting now!";
        clearInterval(countdownInterval);
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
