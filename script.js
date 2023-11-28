// Getting references to DOM elements
const timer = document.querySelector('.timer'); // Reference to the timer display
const startbtn = document.querySelector('.sp-btn'); // Reference to the start/pause button
const lapbtn = document.querySelector('.lapbtn'); // Reference to the lap button
const laps = document.querySelector('.laps'); // Reference to the container for lap times

// Variables for managing timer functionality
let timerInterval; // Holds the setInterval reference for the timer
let check = true; // Flag to manage the start/pause state of the timer
let lapcount = 1; // Counter for lap numbers
let text_for_lap = '00:00:00'; // Holds lap time

// Functionality for the lap button
lapbtn.addEventListener('click', () => {
    // Creating a new paragraph element for lap time
    let newElement = document.createElement('p');
    // Setting the content for the new lap time element
    newElement.innerHTML = '<i class="fas fa-stopwatch"></i>' + " " + lapcount + " " + text_for_lap;
    newElement.classList.add('.lap-style'); // Adding a class to the new lap time element
    laps.appendChild(newElement); // Adding the new lap time element to the laps container
    lapcount++; // Incrementing lap counter
});

// Functionality for the start/pause button (timer)
startbtn.addEventListener('click', function () {
    if (check === true) {
        // Starting the timer
        timerInterval = window.setInterval(counter, 1000); // Start the interval with 1-second interval
        startbtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change the button icon to pause
        startbtn.style.color = 'orange'; // Change button color to orange
        lapbtn.classList.toggle('hidden'); // Toggle visibility of lap button
        check = false; // Set the flag to indicate timer is running
    } else {
        // Pausing the timer
        clearInterval(timerInterval); // Clear the interval to stop the timer
        startbtn.innerHTML = '<i class="fas fa-play"></i>'; // Change the button icon to play
        startbtn.style.color = 'white'; // Change button color to white
        startbtn.classList.add('sp-btn'); // Add a class to the button
        lapbtn.classList.toggle('hidden'); // Toggle visibility of lap button
        check = true; // Set the flag to indicate timer is paused
    }
});
let hours = 0;
let minutes = 0;
let seconds = 0;
// Function to update the timer display
function counter() {
    seconds++;
    // Logic to update hours, minutes, and seconds
    // (omitted for brevity as it updates the timer display)
    if (seconds > 60) {
        minutes += 1;
        seconds = 0;
        if (minutes > 60) {
            hours += 1;
            minutes = 0;
        }

    }
    let leadingsec = 0;
    let leadingminutes = 0;
    let leadinghours = 0;
    if (seconds < 10) {
        leadingsec = '0' + seconds.toString();
    }
    else {
        leadingsec = seconds;
    }
    if (minutes < 10) {
        leadingminutes = '0' + minutes.toString();
    } else {
        leadingminutes = minutes;
    }
    if (hours < 10) {
        leadinghours = '0' + hours.toString();
    } else {
        leadinghours = hours;
    }


    text_for_lap = leadinghours + ':' + leadingminutes + ':' + leadingsec;
    timer.innerText = leadinghours + ':' + leadingminutes + ':' + leadingsec;
}

// Functionality for the reset button
const resetbtn = document.querySelector('.rl-btn');
resetbtn.addEventListener('click', function () {
    clearInterval(timerInterval); // Stop the interval on reset
    hours = 0;
    minutes = 0;
    seconds = 0;
    if (check===false){
    lapbtn.classList.toggle('hidden'); // Toggle visibility of lap button
    };
    // Resetting start button appearance and state
    startbtn.innerHTML = '<i class="fas fa-play"></i>';
    startbtn.style.color = 'white';
    startbtn.classList.add('sp-btn');

    // Reset the displayed time
    timer.innerText = '00:00:00';
    text_for_lap = '00:00:00';
    check = true; // Set the flag to indicate timer is paused
    lapcount=1;
    laps.innerHTML = ""; // Clear lap times from the laps container
});
